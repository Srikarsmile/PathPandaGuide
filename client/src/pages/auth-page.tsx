import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Extend the schema to add password confirmation for registration
const registerSchema = insertUserSchema.extend({
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

type RegisterFormValues = z.infer<typeof registerSchema>;
type LoginFormValues = Pick<z.infer<typeof insertUserSchema>, "username" | "password">;

export default function AuthPage() {
  const { toast } = useToast();
  const { user, loginMutation, registerMutation } = useAuth();
  
  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(
      insertUserSchema.pick({ username: true, password: true })
    ),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Registration form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      role: "user",
    },
  });
  
  const onLoginSubmit = async (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };
  
  const onRegisterSubmit = async (data: RegisterFormValues) => {
    const { confirmPassword, ...userData } = data;
    registerMutation.mutate(userData);
  };
  
  // Redirect if already logged in
  if (user) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Forms */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-white dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Path Panda Admin</CardTitle>
            <CardDescription>
              Sign in to access the admin dashboard and manage your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="login-username">Username</Label>
                      <Input
                        id="login-username"
                        type="text"
                        autoComplete="username"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={loginMutation.isPending}
                        {...loginForm.register("username")}
                      />
                      {loginForm.formState.errors.username && (
                        <p className="text-red-500 text-sm">
                          {loginForm.formState.errors.username.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        autoComplete="current-password"
                        disabled={loginMutation.isPending}
                        {...loginForm.register("password")}
                      />
                      {loginForm.formState.errors.password && (
                        <p className="text-red-500 text-sm">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                    
                    <Button type="submit" disabled={loginMutation.isPending}>
                      {loginMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="register-username">Username</Label>
                      <Input
                        id="register-username"
                        type="text"
                        autoComplete="username"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={registerMutation.isPending}
                        {...registerForm.register("username")}
                      />
                      {registerForm.formState.errors.username && (
                        <p className="text-red-500 text-sm">
                          {registerForm.formState.errors.username.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        type="password"
                        autoComplete="new-password"
                        disabled={registerMutation.isPending}
                        {...registerForm.register("password")}
                      />
                      {registerForm.formState.errors.password && (
                        <p className="text-red-500 text-sm">
                          {registerForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="register-confirm-password">Confirm Password</Label>
                      <Input
                        id="register-confirm-password"
                        type="password"
                        autoComplete="new-password"
                        disabled={registerMutation.isPending}
                        {...registerForm.register("confirmPassword")}
                      />
                      {registerForm.formState.errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {registerForm.formState.errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                    
                    <Button type="submit" disabled={registerMutation.isPending}>
                      {registerMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {/* Right side - Hero section */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-500 to-purple-900 p-12 flex items-center justify-center text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Path Panda Admin Dashboard</h1>
          <p className="text-xl mb-6">
            Manage your website content easily with our comprehensive content management system.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Create and manage blog posts
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Update country information on the interactive map
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Maintain university comparison data
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}