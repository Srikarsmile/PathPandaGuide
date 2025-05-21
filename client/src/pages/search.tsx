import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";

export default function UniversitySearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setSearchResults(null);

    try {
      // This will be connected to a real API endpoint later
      // Placeholder for now
      setSearchResults([]);
      
      // Simulating API delay
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    } catch (error) {
      console.error("Search error:", error);
      setIsSearching(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>University Search | Path Panda</title>
        <meta name="description" content="Find your ideal UK university with Path Panda's AI-powered search tool. Get answers about rankings, tuition fees, and program details instantly." />
        <meta property="og:title" content="University Search | Path Panda" />
        <meta property="og:description" content="Find your ideal UK university with Path Panda's AI-powered search tool. Get answers about rankings, tuition fees, and program details instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/search" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-panda-purple mb-4">Find Your Ideal UK University</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Ask anything—our AI combs rankings, tuition tables and reviews in seconds.
            </p>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="E.g., 'Best universities for Computer Science in London under £20,000'"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full py-6 pl-4 pr-10 border-2 border-panda-purple/20 rounded-lg focus:border-panda-purple focus:ring-2 focus:ring-panda-purple/30"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-panda-purple hover:bg-panda-purple/90 text-white font-medium px-6 py-6"
                  disabled={isSearching || !query.trim()}
                >
                  {isSearching ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <SearchIcon className="mr-2 h-4 w-4" />
                      Search
                    </div>
                  )}
                </Button>
              </div>
            </form>
            
            {searchResults && searchResults.length === 0 && (
              <Card className="p-8 text-center bg-gray-50 dark:bg-gray-800 border border-panda-purple/20">
                <h3 className="text-lg font-medium text-panda-purple mb-2">Coming Soon!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI-powered university search is currently in development. Check back soon for this exciting feature!
                </p>
                <div className="mt-4">
                  <Button 
                    onClick={() => window.location.href = '/consult'} 
                    className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple"
                  >
                    Get Personalized Guidance
                  </Button>
                </div>
              </Card>
            )}
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}