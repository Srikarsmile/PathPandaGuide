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
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-panda-purple dark:text-panda-lav font-bold text-xl md:text-2xl cursor-pointer">
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
            <Link href="/features">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Features
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer">
                Contact
              </span>
            </Link>
            
            <Link href="/consult">
              <Button
                className="bg-panda-purple hover:bg-panda-purple/90 text-white font-medium py-2 px-4 rounded-lg"
              >
                Book Consultation
              </Button>
            </Link>
            
            <AuthButton />
            <DarkModeToggle />
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
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  Home
                </span>
              </Link>
              <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  Tools
                </span>
              </Link>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  Features
                </span>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  Blog
                </span>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  About
                </span>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-700 dark:text-gray-300 hover:text-panda-purple dark:hover:text-panda-lav transition-colors duration-200 cursor-pointer block py-1 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  Contact
                </span>
              </Link>
              <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block bg-panda-purple text-white font-medium py-2 px-3 rounded-lg text-center hover:bg-opacity-90 transition-colors duration-200">
                  Book Consultation
                </span>
              </Link>
              
              <div className="px-2">
                <AuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
