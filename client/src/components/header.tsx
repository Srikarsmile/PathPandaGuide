import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import DarkModeToggle from "./dark-mode-toggle";
import AuthButton from "./auth-button";
import pathPandaLogo from "../assets/path-panda-logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src={pathPandaLogo} 
                  alt="Path Panda Logo" 
                  className="h-28 md:h-40 -my-8 transition-all duration-300 hover:scale-105 filter dark:brightness-125"
                  key="logo-image" 
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/">
                <span className="text-gray-900 dark:text-gray-200 font-medium text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  Home
                </span>
              </Link>
              <Link href="/tools">
                <span className="text-gray-900 dark:text-gray-200 font-medium text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  Resources
                </span>
              </Link>
              <Link href="/features">
                <span className="text-gray-900 dark:text-gray-200 font-medium text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  Services
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-gray-900 dark:text-gray-200 font-medium text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  Insights
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-900 dark:text-gray-200 font-medium text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-900 dark:text-gray-200 font-normal text-sm hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200">
                  Contact
                </span>
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/consult">
                <Button
                  className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-medium text-sm px-4 py-1.5 rounded shadow"
                >
                  Schedule Advising
                </Button>
              </Link>
              
              <AuthButton />
              <DarkModeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <DarkModeToggle className="mr-2" />
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100 dark:border-gray-700 pt-3 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  Home
                </span>
              </Link>
              <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  Resources
                </span>
              </Link>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  Services
                </span>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  Insights
                </span>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  About
                </span>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium text-sm">
                  Contact
                </span>
              </Link>
              
              <div className="px-4 pt-3 border-t border-gray-100 dark:border-gray-700 mt-2">
                <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-medium text-sm w-full py-2 shadow"
                  >
                    Schedule Advising
                  </Button>
                </Link>
              </div>
              
              <div className="px-4 flex justify-start">
                <AuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}