import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Contact from "@/pages/contact";
import Tools from "@/pages/tools";
import Features from "@/pages/features";
import About from "@/pages/about";
import AuthPage from "@/pages/auth-page";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
import { ThemeProvider } from "@/lib/theme-context";

// Lazy load the consult page
const Consult = lazy(() => import("@/pages/consult"));

// Lazy load admin pages
const AdminDashboard = lazy(() => import("@/pages/admin-dashboard"));
const AdminBlogNew = lazy(() => import("@/pages/admin-blog-new"));
const AdminBlogEdit = lazy(() => import("@/pages/admin-blog-edit"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/tools" component={Tools} />
      <Route path="/features" component={Features} />
      <Route path="/about" component={About} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/consult">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
              <p className="text-panda-purple dark:text-panda-lav font-medium">Loading consultation page...</p>
            </div>
          </div>
        }>
          <Consult />
        </Suspense>
      </Route>
      
      {/* Admin Routes */}
      <Route path="/admin">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
              <p className="text-panda-purple dark:text-panda-lav font-medium">Loading admin dashboard...</p>
            </div>
          </div>
        }>
          <AdminDashboard />
        </Suspense>
      </Route>
      
      <Route path="/admin/blog/new">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
              <p className="text-panda-purple dark:text-panda-lav font-medium">Loading new blog post form...</p>
            </div>
          </div>
        }>
          <AdminBlogNew />
        </Suspense>
      </Route>
      
      <Route path="/admin/blog/edit/:id">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
              <p className="text-panda-purple dark:text-panda-lav font-medium">Loading blog post editor...</p>
            </div>
          </div>
        }>
          <AdminBlogEdit />
        </Suspense>
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Path Panda - Find Your Perfect Study-Abroad Path</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Path Panda guides students to their ideal international education opportunities, from visa support to scholarship applications." />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </Helmet>
      
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
