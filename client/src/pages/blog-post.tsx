import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";
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

export default function BlogPostPage() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog-posts', slug],
    enabled: !!slug,
  });

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

  const estimateReadingTime = (content: string) => {
    if (!content) return 0;
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const sharePost = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <Layout title="Loading...">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout title="Article Not Found">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Article Not Found
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <Button className="bg-panda-purple hover:bg-panda-purple/90">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={post?.title || "Blog Post"}>
      <Helmet>
        <title>{post?.title ? `${post.title} | Path Panda Blog` : "Blog Post | Path Panda"}</title>
        <meta name="description" content={post?.description || ""} />
        <meta property="og:title" content={post?.title ? `${post.title} | Path Panda Blog` : "Blog Post | Path Panda"} />
        <meta property="og:description" content={post?.description || ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pathpanda.com/blog/${post?.slug || ""}`} />
        {post?.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta name="article:published_time" content={post?.createdAt || ""} />
        <meta name="article:author" content={post?.author || "Path Panda Team"} />
        <meta name="article:section" content={post?.category || ""} />
      </Helmet>

      {/* Back to Blog Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 text-panda-purple hover:text-panda-purple/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          {/* Featured Image */}
          {post.imageUrl && (
            <div className="h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Category Badge */}
          <div className="mb-4">
            <Badge className={getCategoryColor(post.category)}>
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-panda-purple mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            {post.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
            )}
            
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(post.createdAt)}
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {estimateReadingTime(post.content)} min read
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={sharePost}
              className="text-panda-purple hover:text-panda-purple/80"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-panda-purple prose-links:text-panda-pink hover:prose-links:text-panda-purple prose-strong:text-panda-purple">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Published on {formatDate(post.createdAt)}
              {post.author && ` by ${post.author}`}
            </div>
            
            <Button 
              onClick={sharePost}
              className="bg-panda-purple hover:bg-panda-purple/90 self-start sm:self-auto"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share this article
            </Button>
          </div>
        </footer>
      </article>

      {/* Related Articles CTA */}
      <section className="bg-gradient-to-br from-panda-purple/5 to-panda-lav/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-panda-purple mb-4">
            Explore More Articles
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Discover more expert insights and practical guides for your study abroad journey.
          </p>
          <Link href="/blog">
            <Button className="bg-panda-purple hover:bg-panda-purple/90">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}