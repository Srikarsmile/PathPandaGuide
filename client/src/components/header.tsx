import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import DarkModeToggle from "./dark-mode-toggle";
import AuthButton from "./auth-button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-panda-purple dark:text-panda-lav font-bold text-2xl cursor-pointer">
                Path Panda
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/tools">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Tools
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Contact
              </span>
            </Link>
            
            <AuthButton />
            <DarkModeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/">
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/tools">
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                  Tools
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                  Blog
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                  Contact
                </span>
              </Link>
              
              <AuthButton />
              <DarkModeToggle className="w-fit" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
