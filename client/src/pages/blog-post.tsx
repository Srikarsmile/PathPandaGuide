import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { getBlogPostBySlug, BlogPost } from "@/lib/blog";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const fetchedPost = getBlogPostBySlug(params.slug);
      if (fetchedPost) {
        setPost(fetchedPost);
      }
      setLoading(false);
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <h1 className="text-3xl font-bold text-red-500">Blog Post Not Found</h1>
                <p className="mt-4">
                  Sorry, the blog post you're looking for doesn't exist or has been removed.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Path Panda Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={`${post.title} | Path Panda Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pathpanda.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.imageUrl} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-12 bg-gray-50 dark:bg-gray-900">
          <article className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className={`${post.categoryColor} text-sm font-semibold mb-2`}>
                    {post.category}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                    <span>{post.date}</span>
                  </div>
                  
                  <img 
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    className="w-full h-64 object-cover rounded-lg mb-8"
                  />
                  
                  <Separator className="mb-8" />
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
