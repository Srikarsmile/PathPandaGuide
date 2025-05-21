import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import AuthPage from "@/pages/auth-page";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
import { ThemeProvider } from "@/lib/theme-context";

// Lazy load admin pages
const AdminDashboard = lazy(() => import("@/pages/admin-dashboard"));
const AdminBlogNew = lazy(() => import("@/pages/admin-blog-new"));
const AdminBlogEdit = lazy(() => import("@/pages/admin-blog-edit"));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
      <p className="text-panda-purple dark:text-panda-lav font-medium">{message}</p>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      {/* Main Routes - 3-page structure */}
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      
      {/* New Pages from Pathpanda Content */}
      <Route path="/success-stories" component={() => import("@/pages/success-stories").then(mod => <mod.default />)} />
      <Route path="/faq" component={() => import("@/pages/faq").then(mod => <mod.default />)} />
      <Route path="/privacy-terms" component={() => import("@/pages/privacy-terms").then(mod => <mod.default />)} />
      
      {/* Auth Route */}
      <Route path="/auth" component={AuthPage} />
      
      {/* Admin Routes */}
      <Route path="/admin" component={() => (
        <Suspense fallback={<LoadingFallback message="Loading admin dashboard..." />}>
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        </Suspense>
      )} />
      
      <Route path="/admin/blog/new" component={() => (
        <Suspense fallback={<LoadingFallback message="Loading new blog post form..." />}>
          <ProtectedRoute>
            <AdminBlogNew />
          </ProtectedRoute>
        </Suspense>
      )} />
      
      <Route path="/admin/blog/edit/:id" component={({ params }) => (
        <Suspense fallback={<LoadingFallback message="Loading blog post editor..." />}>
          <ProtectedRoute>
            <AdminBlogEdit />
          </ProtectedRoute>
        </Suspense>
      )} />
      
      {/* 404 Page */}
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
