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
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-panda-purple dark:text-panda-lav font-bold text-xl md:text-2xl cursor-pointer">
                <span className="text-panda-yellow mr-1">Path</span>Panda
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                Home
              </span>
            </Link>
            <Link href="/tools">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                Resources
              </span>
            </Link>
            <Link href="/features">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                Services
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                Insights
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide font-medium">
                Contact
              </span>
            </Link>
            
            <Link href="/consult">
              <Button
                className="bg-gradient-to-r from-panda-yellow to-[#FFC000] hover:bg-panda-yellow/90 text-panda-purple font-semibold py-2 px-5 rounded-full shadow-md border border-panda-yellow/30"
              >
                Schedule Advising
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
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  Home
                </span>
              </Link>
              <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  Resources
                </span>
              </Link>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  Services
                </span>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  Insights
                </span>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  About
                </span>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow transition-colors duration-200 cursor-pointer block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-sm uppercase tracking-wide font-medium">
                  Contact
                </span>
              </Link>
              <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block bg-gradient-to-r from-panda-yellow to-[#FFC000] text-panda-purple font-semibold py-3 px-4 rounded-full text-center shadow-md border border-panda-yellow/30">
                  Schedule Advising
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
