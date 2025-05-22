import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  category: string;
  author?: string;
  createdAt: string;
  published: boolean;
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog'],
  });

  // Filter posts based on search and category
  const filteredPosts = (blogPosts as BlogPost[]).filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = ["all", ...Array.from(new Set((blogPosts as BlogPost[]).map((post: BlogPost) => post.category)))];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Study Tips': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'University Guide': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Visa Process': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Student Life': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Scholarships': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'Career Advice': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <Layout title="Blog">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Blog">
      <Helmet>
        <title>Blog - Study Abroad Tips & Guides | Path Panda</title>
        <meta name="description" content="Expert insights, practical tips, and comprehensive guides for international students. From visa processes to university applications and student life abroad." />
        <meta property="og:title" content="Blog - Study Abroad Tips & Guides | Path Panda" />
        <meta property="og:description" content="Expert insights, practical tips, and comprehensive guides for international students. From visa processes to university applications and student life abroad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-panda-purple/10 via-panda-lav/10 to-panda-pink/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-panda-purple mb-6">
            Your Study Abroad Journey Starts Here
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Expert insights, practical tips, and comprehensive guides to help you navigate your international education adventure successfully.
          </p>
          
          {/* Search and Filter Section */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-panda-purple hover:bg-panda-purple/90" : ""}
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {category === "all" ? "All Articles" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              {searchQuery || selectedCategory !== "all" ? "No articles found" : "No blog posts yet"}
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              {searchQuery || selectedCategory !== "all" 
                ? "Try adjusting your search or filter criteria" 
                : "Check back soon for expert study abroad insights and tips!"
              }
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: BlogPost) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-panda-purple/20 to-panda-lav/20">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      📖
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.createdAt)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-panda-purple mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  {post.author && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  )}
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 text-panda-pink hover:text-panda-purple">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-panda-purple to-panda-lav py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-panda-yellow/90 text-lg mb-8">
            Get the latest study abroad tips, visa updates, and university insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}