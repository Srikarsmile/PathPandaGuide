import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRoute, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowLeft, Share2, Clock, Tag, Edit, Trash2, X } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BlogPostForm from "@/components/blog-post-form";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  category: string;
  categoryColor?: string;
  date?: Date;
  author?: string;
  authorId?: number;
  createdAt: string;
  updatedAt?: Date;
  published: boolean;
};

export default function BlogPostPage() {
  const [, params] = useRoute('/blog/:slug');
  const [, setLocation] = useLocation();
  const slug = params?.slug;
  const queryClient = useQueryClient();
  
  const [showCodeDialog, setShowCodeDialog] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/blog-posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error('Failed to delete post');
      // DELETE returns 204 with no content, so don't try to parse JSON
      return true;
    },
    onSuccess: () => {
      // Invalidate both blog posts cache and admin cache
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog-posts'] });
      setLocation('/blog');
    },
  });

  const handleCodeSubmit = async () => {
    if (accessCode === "4455") {
      // Auto-login as admin when code is correct
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: 'admin', password: 'adminpass' }),
        });
        
        if (response.ok) {
          setShowActionMenu(true);
          setShowCodeDialog(false);
          setAccessCode("");
        } else {
          alert("Authentication failed");
          setAccessCode("");
        }
      } catch (error) {
        alert("Login error occurred");
        setAccessCode("");
      }
    } else {
      alert("Invalid access code");
      setAccessCode("");
    }
  };

  const handleEdit = () => {
    setShowEditForm(true);
    setShowActionMenu(false);
  };

  const handleDelete = () => {
    if (post && confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
      deleteMutation.mutate(post.id);
    }
  };

  const closeAllDialogs = () => {
    setShowCodeDialog(false);
    setShowActionMenu(false);
    setShowEditForm(false);
    setAccessCode("");
  };

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

  if (error) {
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

  if (!post) {
    return (
      <Layout title="Loading...">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={post.title || "Blog Post"}>
      <Helmet>
        <title>{post.title ? `${post.title} | Path Panda Blog` : "Blog Post | Path Panda"}</title>
        <meta name="description" content={post.description || ""} />
        <meta property="og:title" content={post.title ? `${post.title} | Path Panda Blog` : "Blog Post | Path Panda"} />
        <meta property="og:description" content={post.description || ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pathpanda.com/blog/${post.slug || ""}`} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta name="article:published_time" content={post.createdAt || ""} />
        <meta name="article:author" content={post.author || "Path Panda Team"} />
        <meta name="article:section" content={post.category || ""} />
      </Helmet>

      {/* Back to Blog Button and Edit Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/blog">
            <Button variant="ghost" className="text-panda-purple hover:text-panda-purple/80">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCodeDialog(true)}
            className="text-panda-purple hover:text-panda-purple/80 hover:bg-panda-purple/10"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
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

      {/* Code Entry Dialog */}
      <Dialog open={showCodeDialog} onOpenChange={setShowCodeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Access Code</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter code..."
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCodeSubmit()}
            />
            <div className="flex gap-2">
              <Button onClick={handleCodeSubmit} className="bg-panda-purple hover:bg-panda-purple/90">
                Access
              </Button>
              <Button variant="outline" onClick={closeAllDialogs}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Action Menu Dialog */}
      <Dialog open={showActionMenu} onOpenChange={setShowActionMenu}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Article Management</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Button 
              onClick={handleEdit}
              className="w-full bg-panda-purple hover:bg-panda-purple/90"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Article
            </Button>
            <Button 
              onClick={handleDelete}
              variant="destructive"
              className="w-full"
              disabled={deleteMutation.isPending}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              {deleteMutation.isPending ? 'Deleting...' : 'Delete Article'}
            </Button>
            <Button variant="outline" onClick={closeAllDialogs} className="w-full">
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Form Dialog */}
      <Dialog open={showEditForm} onOpenChange={setShowEditForm}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Article</DialogTitle>
          </DialogHeader>
          {post && (
            <BlogPostForm 
              post={post}
              onSuccess={closeAllDialogs}
              onCancel={closeAllDialogs}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}