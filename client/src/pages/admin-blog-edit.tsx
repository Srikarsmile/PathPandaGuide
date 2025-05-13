import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation, useRoute } from "wouter";
import BlogPostForm from "@/components/blog-post-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";

export default function AdminBlogEdit() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/admin/blog/edit/:id");
  
  // Only allow admin users
  if (!user || user.role !== "admin") {
    return <Redirect to="/" />;
  }
  
  const postId = match ? parseInt(params.id) : null;
  
  // Fetch the blog post data
  const { 
    data: post,
    isLoading,
    error 
  } = useQuery<BlogPost>({
    queryKey: ["/api/admin/blog-posts", postId],
    enabled: !!postId,
  });
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg">Loading blog post...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg shadow-sm border border-red-200 dark:border-red-800 max-w-lg w-full">
          <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Error Loading Blog Post</h2>
          <p className="text-red-600 dark:text-red-400 mb-4">{error.message || "Failed to load blog post data."}</p>
          <Button onClick={() => navigate("/admin")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="container mx-auto py-8 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800 max-w-lg w-full">
          <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-2">Blog Post Not Found</h2>
          <p className="text-amber-600 dark:text-amber-400 mb-4">The blog post you're trying to edit could not be found.</p>
          <Button onClick={() => navigate("/admin")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/admin")}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Edit Blog Post</h1>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <BlogPostForm 
            post={post}
            onSuccess={() => navigate("/admin")}
            onCancel={() => navigate("/admin")}
          />
        </div>
      </div>
    </div>
  );
}