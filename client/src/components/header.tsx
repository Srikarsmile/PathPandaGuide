import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


import pathPandaLogo from "../assets/path-panda-logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
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
                <span className="text-gray-900 font-medium text-sm hover:text-panda-purple transition-colors duration-200">
                  Home
                </span>
              </Link>
              <Link href="/services">
                <span className="text-gray-900 font-medium text-sm hover:text-panda-purple transition-colors duration-200">
                  Services
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-gray-900 font-medium text-sm hover:text-panda-purple transition-colors duration-200">
                  Blog
                </span>
              </Link>

              <Link href="/contact">
                <span className="text-gray-900 font-medium text-sm hover:text-panda-purple transition-colors duration-200">
                  Contact
                </span>
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
                target="_blank"
                rel="noopener"
              >
                <Button
                  className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-medium text-sm px-4 py-1.5 rounded shadow"
                >
                  Book WhatsApp Consultation
                </Button>
              </a>

            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:text-panda-purple p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100 pt-3 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-semibold text-sm">
                  Home
                </span>
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-semibold text-sm">
                  Services
                </span>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-semibold text-sm">
                  Blog
                </span>
              </Link>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="block text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-semibold text-sm">
                  Contact
                </span>
              </Link>
              
              <div className="px-4 pt-3 border-t border-gray-100 dark:border-gray-700 mt-2">
                <a 
                  href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
                  target="_blank"
                  rel="noopener"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-medium text-sm w-full py-2 shadow"
                  >
                    Book WhatsApp Consultation
                  </Button>
                </a>
              </div>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}