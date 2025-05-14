import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Redirect, Link as WouterLink } from "wouter";
import { Loader2, Plus, Edit, Trash2 } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { 
  BlogPost, 
  Country, 
  University 
} from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const { toast } = useToast();
  const [tabValue, setTabValue] = useState("blog");
  
  // Queries for different data types
  const { 
    data: blogPosts,
    isLoading: isLoadingBlogPosts,
    error: blogPostsError 
  } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog-posts"],
    enabled: tabValue === "blog" && user?.role === "admin",
  });
  
  const { 
    data: countries,
    isLoading: isLoadingCountries,
    error: countriesError 
  } = useQuery<Country[]>({
    queryKey: ["/api/admin/countries"],
    enabled: tabValue === "countries" && user?.role === "admin",
  });
  
  const { 
    data: universities,
    isLoading: isLoadingUniversities,
    error: universitiesError 
  } = useQuery<University[]>({
    queryKey: ["/api/admin/universities"],
    enabled: tabValue === "universities" && user?.role === "admin",
  });
  
  // Redirect non-admin users
  if (user?.role !== "admin") {
    return <Redirect to="/" />;
  }
  
  // Mutation for deleting a blog post
  const deleteBlogMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/blog-posts/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Blog post deleted",
        description: "The blog post has been successfully deleted",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
    },
    onError: (error) => {
      toast({
        title: "Error deleting blog post",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Mutation for deleting a country
  const deleteCountryMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/countries/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Country deleted",
        description: "The country has been successfully deleted",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/countries"] });
    },
    onError: (error) => {
      toast({
        title: "Error deleting country",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Mutation for deleting a university
  const deleteUniversityMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/universities/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "University deleted",
        description: "The university has been successfully deleted",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/universities"] });
    },
    onError: (error) => {
      toast({
        title: "Error deleting university",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const handleDeleteBlogPost = (id: number) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogMutation.mutate(id);
    }
  };
  
  const handleDeleteCountry = (id: number) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      deleteCountryMutation.mutate(id);
    }
  };
  
  const handleDeleteUniversity = (id: number) => {
    if (window.confirm("Are you sure you want to delete this university?")) {
      deleteUniversityMutation.mutate(id);
    }
  };
  
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <span>Welcome, {user?.username} (Admin)</span>
          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
          >
            {logoutMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Logout"
            )}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="blog" value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger value="universities">Universities</TabsTrigger>
        </TabsList>
        
        {/* Blog Posts Tab */}
        <TabsContent value="blog">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>
                  Manage your blog posts here. You can create, edit, and delete posts.
                </CardDescription>
              </div>
              <WouterLink href="/admin/blog/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add New Post
                </Button>
              </WouterLink>
            </CardHeader>
            <CardContent>
              {isLoadingBlogPosts ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : blogPostsError ? (
                <div className="text-red-500 py-4">
                  Error loading blog posts: {blogPostsError.message}
                </div>
              ) : blogPosts && blogPosts.length > 0 ? (
                <div className="grid gap-4">
                  <div className="grid grid-cols-12 font-medium py-2 border-b">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-3">Title</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-1">Published</div>
                    <div className="col-span-3">Actions</div>
                  </div>
                  
                  {blogPosts.map((post) => (
                    <div key={post.id} className="grid grid-cols-12 py-2 border-b items-center">
                      <div className="col-span-1">{post.id}</div>
                      <div className="col-span-3 truncate" title={post.title}>
                        {post.title}
                      </div>
                      <div className="col-span-2">
                        <span 
                          className="px-2 py-1 rounded-full text-xs"
                          style={{ 
                            backgroundColor: post.categoryColor,
                            color: '#fff'
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <div className="col-span-2">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">
                        {post.published ? "Yes" : "No"}
                      </div>
                      <div className="col-span-3 flex gap-2">
                        <WouterLink href={`/admin/blog/edit/${post.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </WouterLink>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteBlogPost(post.id)}
                          disabled={deleteBlogMutation.isPending}
                        >
                          {deleteBlogMutation.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  No blog posts found. Click "Add New Post" to create one.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Countries Tab */}
        <TabsContent value="countries">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Countries</CardTitle>
                <CardDescription>
                  Manage country data for the interactive map.
                </CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add New Country
              </Button>
            </CardHeader>
            <CardContent>
              {isLoadingCountries ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : countriesError ? (
                <div className="text-red-500 py-4">
                  Error loading countries: {countriesError.message}
                </div>
              ) : countries && countries.length > 0 ? (
                <div className="grid gap-4">
                  <div className="grid grid-cols-12 font-medium py-2 border-b">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-2">Flag</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-3">Region</div>
                    <div className="col-span-3">Actions</div>
                  </div>
                  
                  {countries.map((country) => (
                    <div key={country.id} className="grid grid-cols-12 py-2 border-b items-center">
                      <div className="col-span-1">{country.id}</div>
                      <div className="col-span-2 text-2xl">{country.flagEmoji}</div>
                      <div className="col-span-3">{country.name}</div>
                      <div className="col-span-3">{country.region}</div>
                      <div className="col-span-3 flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteCountry(country.id)}
                          disabled={deleteCountryMutation.isPending}
                        >
                          {deleteCountryMutation.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  No countries found. Click "Add New Country" to create one.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Universities Tab */}
        <TabsContent value="universities">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Universities</CardTitle>
                <CardDescription>
                  Manage university data for comparisons.
                </CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add New University
              </Button>
            </CardHeader>
            <CardContent>
              {isLoadingUniversities ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : universitiesError ? (
                <div className="text-red-500 py-4">
                  Error loading universities: {universitiesError.message}
                </div>
              ) : universities && universities.length > 0 ? (
                <div className="grid gap-4">
                  <div className="grid grid-cols-12 font-medium py-2 border-b">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-4">Name</div>
                    <div className="col-span-2">Country</div>
                    <div className="col-span-2">Ranking</div>
                    <div className="col-span-3">Actions</div>
                  </div>
                  
                  {universities.map((university) => (
                    <div key={university.id} className="grid grid-cols-12 py-2 border-b items-center">
                      <div className="col-span-1">{university.id}</div>
                      <div className="col-span-4 truncate" title={university.name}>
                        {university.name}
                      </div>
                      <div className="col-span-2">{university.country}</div>
                      <div className="col-span-2">#{university.ranking}</div>
                      <div className="col-span-3 flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteUniversity(university.id)}
                          disabled={deleteUniversityMutation.isPending}
                        >
                          {deleteUniversityMutation.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  No universities found. Click "Add New University" to create one.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}