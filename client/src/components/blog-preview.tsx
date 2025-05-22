import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./blog-card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

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
  categoryColor?: string;
};

export default function BlogPreview() {
  const { data: allBlogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog'],
  });

  // Get the latest 3 published posts
  const latestPosts = (allBlogPosts as BlogPost[])
    .filter(post => post.published)
    .slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Study Tips': 'text-blue-600',
      'University Guide': 'text-green-600',
      'Visa Process': 'text-purple-600',
      'Student Life': 'text-orange-600',
      'Scholarships': 'text-pink-600',
      'Career Advice': 'text-indigo-600',
      'News': 'text-panda-pink',
      'Guide': 'text-panda-yellow',
      'Destinations': 'text-panda-lav',
    };
    return colors[category] || 'text-panda-purple';
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Latest from our blog</h2>
            <p className="text-gray-600 dark:text-gray-300">Expert insights and practical guides for your study abroad journey</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="text-panda-purple border-panda-purple hover:bg-panda-purple hover:text-white">
              <BookOpen className="h-4 w-4 mr-2" />
              View all articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        {latestPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Blog Coming Soon!
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              We're preparing amazing content to help you on your study abroad journey.
            </p>
            <Link href="/blog">
              <Button className="bg-panda-purple hover:bg-panda-purple/90">
                Stay Updated
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={formatDate(post.createdAt)}
                category={post.category}
                categoryColor={getCategoryColor(post.category)}
                imageUrl={post.imageUrl || ""}
                imageAlt={post.title}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
