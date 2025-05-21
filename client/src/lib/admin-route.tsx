import { Suspense } from "react";
import { Route } from "wouter";
import { ProtectedRoute } from "./protected-route";

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-4 border-panda-purple/30 border-t-panda-purple animate-spin mb-4"></div>
      <p className="text-panda-purple dark:text-panda-lav font-medium">{message}</p>
    </div>
  </div>
);

export function AdminRoute({
  path,
  component: Component
}: {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}) {
  return (
    <ProtectedRoute
      path={path}
      component={() => (
        <Suspense fallback={<LoadingFallback message={`Loading ${path}...`} />}>
          <Component />
        </Suspense>
      )}
      adminOnly={true}
    />
  );
}