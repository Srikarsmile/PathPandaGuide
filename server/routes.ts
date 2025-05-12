import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/pplx", async (req, res) => {
    try {
      const { query } = req.body;
      
      if (!query || typeof query !== "string") {
        return res.status(400).json({ message: "Invalid query" });
      }
      
      // Check for API key in environment variables
      const apiKey = process.env.PERPLEXITY_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ message: "Perplexity API key not configured" });
      }
      
      // Make request to Perplexity API
      const perplexityResponse = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant providing information about studying abroad. Be precise, concise, and focused on international education topics like visa requirements, scholarships, universities, and student life."
            },
            {
              role: "user",
              content: query
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 500,
          stream: false,
          frequency_penalty: 1
        })
      });
      
      if (!perplexityResponse.ok) {
        const errorText = await perplexityResponse.text();
        console.error("Perplexity API error:", errorText);
        return res.status(perplexityResponse.status).json({ 
          message: "Error from Perplexity API", 
          details: errorText 
        });
      }
      
      const data = await perplexityResponse.json();
      
      // Extract answer and citations from response
      const answer = data.choices[0].message.content;
      const citations = data.citations || [];
      
      return res.json({ answer, citations });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ message: "Internal server error", error: String(error) });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
