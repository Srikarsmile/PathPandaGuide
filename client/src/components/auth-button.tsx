import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AuthButton() {
  const [authEnabled, setAuthEnabled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if we're on the client-side
    setIsClient(true);
    
    // Get ENABLE_AUTH from environment
    const enableAuth = import.meta.env.VITE_ENABLE_AUTH === "true";
    setAuthEnabled(enableAuth);
  }, []);

  // Only render after checking client-side and if auth is enabled
  if (!isClient || !authEnabled) {
    return null;
  }

  return (
    <Link href="/login">
      <Button className="bg-panda-lav hover:bg-panda-purple text-white">
        Sign In
      </Button>
    </Link>
  );
}
