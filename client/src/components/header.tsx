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
    <header className="bg-gradient-to-r from-white/80 to-white/95 dark:from-gray-900/80 dark:to-gray-900/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src={pathPandaLogo} 
                  alt="Path Panda Logo" 
                  className="h-28 md:h-32 -my-4 mr-4 transition-all duration-300 hover:scale-105 filter dark:brightness-125" 
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1 md:space-x-2 lg:space-x-6">
              <Link href="/">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/tools">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">Resources</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/features">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/blog">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">Insights</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/about">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/contact">
                <span className="relative text-gray-800 dark:text-white hover:text-panda-purple dark:hover:text-panda-yellow cursor-pointer font-light text-sm md:text-base group px-2 py-1 transition-all duration-300">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-panda-purple dark:bg-panda-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </div>
            
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/consult">
                <Button
                  className="bg-gradient-to-r from-panda-yellow to-[#FFC000] hover:from-[#FFC000] hover:to-panda-yellow text-panda-purple font-medium py-2 px-5 rounded-full shadow-md border border-panda-yellow/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100/50 dark:border-gray-700/50 pt-3 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-5">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    Resources
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    Insights
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-gray-800 dark:text-white group cursor-pointer flex items-center px-3 py-2">
                  <span className="w-0.5 h-0 group-hover:h-full bg-panda-purple dark:bg-panda-yellow transition-all duration-300 mr-3"></span>
                  <span className="font-light text-base relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-panda-purple/30 dark:bg-panda-yellow/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </Link>
              
              <div className="px-3 pt-3 border-t border-gray-100/20 dark:border-gray-700/20 mt-2">
                <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block bg-gradient-to-r from-panda-yellow to-[#FFC000] hover:from-[#FFC000] hover:to-panda-yellow text-panda-purple font-medium py-3 px-5 rounded-full text-center shadow-md border border-panda-yellow/30 transition-all duration-300">
                    Schedule Advising
                  </span>
                </Link>
              </div>
              
              <div className="px-3 flex justify-start">
                <AuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
