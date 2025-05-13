import type { Express, Request, Response, NextFunction } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage as dbStorage } from "./storage";
import { setupAuth } from "./auth";
import { blogPosts, countries, universities, insertBlogPostSchema, insertCountrySchema, insertUniversitySchema } from "@shared/schema";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

// Middleware to check if user is authenticated and is an admin
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized" });
  }
  
  next();
}

// Configure multer for file uploads
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    // Create a unique filename to prevent conflicts
    const uniqueSuffix = uuidv4();
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${uniqueSuffix}${ext}`);
  }
});

// File filter to only allow image files
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept image files only
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({ 
  storage: fileStorage, 
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  setupAuth(app);
  
  // Serve static files from public directory
  app.use('/public', express.static('public'));
  
  // Image upload endpoint
  app.post('/api/upload', requireAdmin, upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
      
      // Return the URL path to the uploaded file
      const imageUrl = `/public/uploads/${req.file.filename}`;
      
      return res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Error uploading file:', error);
      return res.status(500).json({ message: 'Error uploading file' });
    }
  });
  // API routes
  // Fix all references to storage -> dbStorage
  app.post("/api/pplx", async (req, res) => {
    try {
      const { query } = req.body;
      
      if (!query || typeof query !== "string") {
        return res.status(400).json({ message: "Invalid query" });
      }
      
      // Check if query is study abroad related
      const studyAbroadKeywords = [
        "study abroad", "international student", "university", "college", "visa", 
        "scholarship", "education", "degree", "program", "course", "campus", 
        "academic", "tuition", "student", "admission", "application", "school",
        "overseas", "foreign", "international", "exchange", "global", "abroad",
        "bachelor", "master", "phd", "dormitory", "accommodation", "housing"
      ];
      
      const isStudyAbroadRelated = studyAbroadKeywords.some(keyword => 
        query.toLowerCase().includes(keyword.toLowerCase())
      );
      
      if (!isStudyAbroadRelated) {
        return res.json({ 
          answer: "I'm sorry, but I can only answer questions related to studying abroad, international education, universities, visas, scholarships, and student life overseas. Please ask a question related to these topics.",
          citations: []
        });
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
              content: "You are a helpful assistant for Path Panda, providing information ONLY about studying abroad. Be precise, concise, and focused on international education topics like visa requirements, scholarships, universities, and student life. If the question is not related to studying abroad, politely decline to answer and explain you only provide information about international education."
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

  // Admin API routes
  // Blog Posts
  app.get("/api/admin/blog-posts", requireAdmin, async (req, res) => {
    try {
      const posts = await dbStorage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });
  
  app.get("/api/admin/blog-posts/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await dbStorage.getBlogPostById(id);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });
  
  app.post("/api/admin/blog-posts", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await dbStorage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating blog post:", error);
      res.status(500).json({ message: "Error creating blog post" });
    }
  });
  
  app.patch("/api/admin/blog-posts/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      // Partial validation of the input data
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      
      const updatedPost = await dbStorage.updateBlogPost(id, validatedData);
      
      if (!updatedPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(updatedPost);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error updating blog post:", error);
      res.status(500).json({ message: "Error updating blog post" });
    }
  });
  
  app.delete("/api/admin/blog-posts/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await dbStorage.deleteBlogPost(id);
      
      if (!success) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ message: "Error deleting blog post" });
    }
  });
  
  // Countries
  app.get("/api/admin/countries", requireAdmin, async (req, res) => {
    try {
      const countries = await dbStorage.getAllCountries();
      res.json(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      res.status(500).json({ message: "Error fetching countries" });
    }
  });
  
  app.get("/api/admin/countries/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const country = await dbStorage.getCountryById(id);
      
      if (!country) {
        return res.status(404).json({ message: "Country not found" });
      }
      
      res.json(country);
    } catch (error) {
      console.error("Error fetching country:", error);
      res.status(500).json({ message: "Error fetching country" });
    }
  });
  
  app.post("/api/admin/countries", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertCountrySchema.parse(req.body);
      const country = await dbStorage.createCountry(validatedData);
      res.status(201).json(country);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating country:", error);
      res.status(500).json({ message: "Error creating country" });
    }
  });
  
  app.patch("/api/admin/countries/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertCountrySchema.partial().parse(req.body);
      
      const updatedCountry = await dbStorage.updateCountry(id, validatedData);
      
      if (!updatedCountry) {
        return res.status(404).json({ message: "Country not found" });
      }
      
      res.json(updatedCountry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error updating country:", error);
      res.status(500).json({ message: "Error updating country" });
    }
  });
  
  app.delete("/api/admin/countries/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await dbStorage.deleteCountry(id);
      
      if (!success) {
        return res.status(404).json({ message: "Country not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting country:", error);
      res.status(500).json({ message: "Error deleting country" });
    }
  });
  
  // Universities
  app.get("/api/admin/universities", requireAdmin, async (req, res) => {
    try {
      const universities = await dbStorage.getAllUniversities();
      res.json(universities);
    } catch (error) {
      console.error("Error fetching universities:", error);
      res.status(500).json({ message: "Error fetching universities" });
    }
  });
  
  app.get("/api/admin/universities/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const university = await dbStorage.getUniversityById(id);
      
      if (!university) {
        return res.status(404).json({ message: "University not found" });
      }
      
      res.json(university);
    } catch (error) {
      console.error("Error fetching university:", error);
      res.status(500).json({ message: "Error fetching university" });
    }
  });
  
  app.post("/api/admin/universities", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertUniversitySchema.parse(req.body);
      const university = await dbStorage.createUniversity(validatedData);
      res.status(201).json(university);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating university:", error);
      res.status(500).json({ message: "Error creating university" });
    }
  });
  
  app.patch("/api/admin/universities/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertUniversitySchema.partial().parse(req.body);
      
      const updatedUniversity = await dbStorage.updateUniversity(id, validatedData);
      
      if (!updatedUniversity) {
        return res.status(404).json({ message: "University not found" });
      }
      
      res.json(updatedUniversity);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error updating university:", error);
      res.status(500).json({ message: "Error updating university" });
    }
  });
  
  app.delete("/api/admin/universities/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await dbStorage.deleteUniversity(id);
      
      if (!success) {
        return res.status(404).json({ message: "University not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting university:", error);
      res.status(500).json({ message: "Error deleting university" });
    }
  });
  
  // Public routes - these are for non-admin users to access data
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await dbStorage.getAllBlogPosts();
      // Only return published posts for public view
      const publishedPosts = posts.filter((post: BlogPost) => post.published);
      res.json(publishedPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });
  
  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await dbStorage.getBlogPostBySlug(req.params.slug);
      
      if (!post || !post.published) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });
  
  app.get("/api/countries", async (req, res) => {
    try {
      const countries = await dbStorage.getAllCountries();
      res.json(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      res.status(500).json({ message: "Error fetching countries" });
    }
  });
  
  app.get("/api/universities", async (req, res) => {
    try {
      const universities = await dbStorage.getAllUniversities();
      res.json(universities);
    } catch (error) {
      console.error("Error fetching universities:", error);
      res.status(500).json({ message: "Error fetching universities" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
