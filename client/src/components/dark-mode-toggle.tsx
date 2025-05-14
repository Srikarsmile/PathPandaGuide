import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const isDarkMode = theme === 'dark';

  const handleToggle = () => {
    if (isAnimating) return; // Prevent rapid clicking during animation
    
    setIsAnimating(true);
    const newDarkMode = !isDarkMode;
    
    // Start the transition effect
    document.documentElement.style.setProperty('--transition-duration', '700ms');
    
    // Apply a subtle overlay animation effect
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-700 ease-in-out';
    overlay.style.backgroundColor = newDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);
    
    // Trigger animation
    setTimeout(() => {
      overlay.style.opacity = '1';
      
      setTimeout(() => {
        // Toggle theme
        toggleTheme();
        
        // Fade out the overlay
        setTimeout(() => {
          overlay.style.opacity = '0';
          
          // Clean up
          setTimeout(() => {
            document.body.removeChild(overlay);
            document.documentElement.style.removeProperty('--transition-duration');
            setIsAnimating(false);
          }, 700);
        }, 100);
      }, 100);
    }, 10);
  };

  return (
    <Button 
      onClick={handleToggle} 
      size="icon" 
      variant="outline" 
      disabled={isAnimating}
      className={`rounded-full p-2 relative overflow-hidden ${className} transition-all duration-300`}
      aria-label="Toggle dark mode"
    >
      <div className="relative z-10 transition-transform duration-500 ease-in-out">
        {isDarkMode ? (
          <Moon className={`h-5 w-5 text-panda-lav transition-all duration-300 ${isAnimating ? 'animate-spin-slow' : ''}`} />
        ) : (
          <Sun className={`h-5 w-5 text-panda-yellow transition-all duration-300 ${isAnimating ? 'animate-spin-slow' : ''}`} />
        )}
      </div>
      <span 
        className={`absolute inset-0 bg-gradient-to-tr ${
          isDarkMode 
            ? 'from-panda-lav/10 to-panda-purple/20' 
            : 'from-panda-yellow/10 to-amber-300/20'
        } transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100`}
      />
    </Button>
  );
}
