import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { BlogPost } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

// Form schema for blog post
const blogPostSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters." }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { 
    message: "Slug must contain only lowercase letters, numbers, and hyphens." 
  }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
  category: z.string().min(2, { message: "Category is required." }),
  categoryColor: z.string().regex(/^#([0-9A-F]{3}){1,2}$/i, { 
    message: "Must be a valid hex color (e.g. #FF0000)" 
  }),
  imageUrl: z.string().url({ message: "Must be a valid URL." }),
  imageAlt: z.string().min(3, { message: "Image alt text is required." }),
  published: z.boolean().default(false),
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

interface BlogPostFormProps {
  post?: BlogPost;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function BlogPostForm({ post, onSuccess, onCancel }: BlogPostFormProps) {
  const queryClient = useQueryClient();
  const isEditing = !!post;
  
  // Initialize form with default values or existing post data
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: isEditing 
      ? {
          title: post.title,
          slug: post.slug,
          description: post.description,
          content: post.content,
          category: post.category,
          categoryColor: post.categoryColor,
          imageUrl: post.imageUrl,
          imageAlt: post.imageAlt,
          published: post.published,
        }
      : {
          title: "",
          slug: "",
          description: "",
          content: "",
          category: "",
          categoryColor: "#FC7A7A", // Default to pandaPink
          imageUrl: "",
          imageAlt: "",
          published: false,
        },
  });
  
  // Generate slug from title (if creating new post and slug is empty)
  const title = form.watch("title");
  const slug = form.watch("slug");
  
  const updateSlug = () => {
    if (!isEditing && title && !slug) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      
      form.setValue("slug", generatedSlug, { shouldValidate: true });
    }
  };
  
  // Create blog post mutation
  const createMutation = useMutation({
    mutationFn: async (data: BlogPostFormValues) => {
      const response = await apiRequest("POST", "/api/admin/blog-posts", {
        ...data,
        authorId: 1, // Default to the admin user
      });
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Blog post created",
        description: "Your blog post has been created successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast({
        title: "Failed to create blog post",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Update blog post mutation
  const updateMutation = useMutation({
    mutationFn: async (data: BlogPostFormValues) => {
      const response = await apiRequest("PATCH", `/api/admin/blog-posts/${post?.id}`, data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Blog post updated",
        description: "Your blog post has been updated successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast({
        title: "Failed to update blog post",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const isSubmitting = createMutation.isPending || updateMutation.isPending;
  
  function onSubmit(data: BlogPostFormValues) {
    if (isEditing) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter blog post title" 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        setTimeout(updateSlug, 500);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="enter-blog-post-slug" {...field} />
                  </FormControl>
                  <FormDescription>
                    The slug is used in the URL. Use only lowercase letters, numbers, and hyphens.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief description for the blog post" 
                      className="resize-none h-20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Study Tips" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="categoryColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Color</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input type="color" {...field} className="w-12 h-10 p-1" />
                      </FormControl>
                      <Input 
                        value={field.value} 
                        onChange={(e) => field.onChange(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <div className="flex flex-col gap-2">
                    <FormControl>
                      <Input 
                        type="file" 
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            try {
                              // Create form data for upload
                              const formData = new FormData();
                              formData.append('image', file);
                              
                              // Upload image
                              const response = await fetch('/api/upload', {
                                method: 'POST',
                                body: formData,
                              });
                              
                              if (!response.ok) {
                                throw new Error('Image upload failed');
                              }
                              
                              const { imageUrl } = await response.json();
                              field.onChange(imageUrl);
                              
                              toast({
                                title: "Image uploaded",
                                description: "Image has been uploaded successfully",
                              });
                            } catch (error) {
                              toast({
                                title: "Image upload failed",
                                description: error instanceof Error ? error.message : "Unknown error",
                                variant: "destructive",
                              });
                            }
                          }
                        }}
                      />
                    </FormControl>
                    
                    {field.value && (
                      <div className="mt-2">
                        <p className="text-sm mb-2">Current image:</p>
                        <div className="relative w-full h-40 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                          <img 
                            src={field.value} 
                            alt="Preview" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <Input 
                          type="text" 
                          value={field.value} 
                          onChange={(e) => field.onChange(e.target.value)} 
                          className="mt-2"
                          placeholder="Image path will appear here after upload"
                        />
                      </div>
                    )}
                  </div>
                  <FormDescription>
                    Upload an image for the blog post or provide a URL directly
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="imageAlt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Alt Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of the image" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4 rounded-md">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Published</FormLabel>
                    <FormDescription>
                      When checked, this post will be visible to the public.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            {form.watch("published") && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                <p className="text-green-700 dark:text-green-300 text-sm">
                  This post is currently published and visible to visitors.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Write your blog post content here..." 
                  className="min-h-[300px] font-mono"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                You can use Markdown for formatting.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </Form>
  );
}