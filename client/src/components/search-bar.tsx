import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { Search } from "lucide-react";

interface SearchResult {
  answer: string;
  citations: string[];
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await apiRequest("POST", "/api/pplx", {
        query: searchQuery
      });
      
      const data = await res.json();
      setSearchResult({
        answer: data.answer,
        citations: data.citations || []
      });
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while fetching your answer. Please try again.");
      setSearchResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Have a study abroad question?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get instant answers with our AI-powered search
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask about visa requirements, scholarships, etc."
                  className="flex-grow px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-panda-lav outline-none"
                />
                <Button 
                  type="submit"
                  className="px-6 py-3 bg-panda-purple hover:bg-opacity-90 text-white font-semibold rounded-lg shadow transition-colors duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-pulse">Searching...</span>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-lg">
                {error}
              </div>
            )}
            
            {searchResult && (
              <div className="mt-6 border-t dark:border-gray-600 pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Answer</h3>
                  <div className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p>{searchResult.answer}</p>
                  </div>
                </div>
                
                {searchResult.citations.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {searchResult.citations.map((citation, index) => (
                        <a 
                          key={index}
                          href={citation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          {new URL(citation).hostname}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
