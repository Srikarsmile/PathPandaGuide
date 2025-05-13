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
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-panda-lav/5 to-panda-pink/5"></div>
      <div className="absolute top-12 right-24 w-24 h-24 bg-panda-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 left-24 w-32 h-32 bg-panda-purple/20 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center bg-panda-lav/10 rounded-full py-1 px-3 md:px-4 mb-3 md:mb-4">
              <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-panda-lav mr-1.5 md:mr-2"></span>
              <span className="text-xs md:text-sm font-medium text-panda-lav">AI-Powered Assistant</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
              Have a Study Abroad Question?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
              Get instant answers with our AI-powered study abroad assistant
            </p>
            <p className="text-xs sm:text-sm text-panda-purple dark:text-panda-lav">
              Only answers questions related to international education
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-600 backdrop-blur-sm">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="E.g., What scholarships are available for engineering students in Germany?"
                    className="w-full pl-12 pr-4 py-6 rounded-xl border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-panda-lav focus:border-transparent text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  className="px-8 py-6 bg-panda-purple hover:bg-opacity-90 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-pulse flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    <>
                      Ask Question
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            {error && (
              <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-xl border border-red-100 dark:border-red-800/30">
                <div className="flex items-center mb-2">
                  <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="font-semibold">Error</span>
                </div>
                {error}
              </div>
            )}
            
            {searchResult && (
              <div className="mt-8 border-t dark:border-gray-600 pt-8">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-panda-purple/10 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6 text-panda-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Answer</h3>
                  </div>
                  
                  <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                    {searchResult.answer.split('\n').map((paragraph, idx) => (
                      paragraph.trim() ? (
                        <p key={idx} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ) : null
                    ))}
                  </div>
                </div>
                
                {searchResult.citations.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <svg className="h-5 w-5 text-panda-pink mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Sources
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {searchResult.citations.map((citation, index) => (
                        <a 
                          key={index}
                          href={citation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white dark:bg-gray-700 text-panda-purple dark:text-panda-lav border border-panda-purple/20 dark:border-panda-lav/20 rounded-full text-sm hover:bg-panda-purple/5 dark:hover:bg-panda-lav/5 transition-colors shadow-sm flex items-center"
                        >
                          <svg className="h-3 w-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          {new URL(citation).hostname}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {!searchResult && !error && !isLoading && (
              <div className="mt-6 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-panda-purple/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="h-6 w-6 text-panda-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">University<br/>Information</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-panda-pink/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="h-6 w-6 text-panda-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visa<br/>Requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-panda-yellow/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="h-6 w-6 text-panda-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Scholarship<br/>Opportunities</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Example questions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Try asking about:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setSearchQuery("What are the best universities for computer science in Germany?")}
              >
                Best CS universities in Germany
              </button>
              <button 
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setSearchQuery("How do I apply for a student visa in Australia?")}
              >
                Student visa in Australia
              </button>
              <button 
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setSearchQuery("What scholarships are available for international students in Canada?")}
              >
                Scholarships in Canada
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
