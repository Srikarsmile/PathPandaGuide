import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import BlogPostForm from "@/components/blog-post-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AdminBlogNew() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  
  // Only allow admin users
  if (!user || user.role !== "admin") {
    return <Redirect to="/" />;
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
          <h1 className="text-2xl font-bold">Create New Blog Post</h1>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <BlogPostForm 
            onSuccess={() => navigate("/admin")}
            onCancel={() => navigate("/admin")}
          />
        </div>
      </div>
    </div>
  );
}