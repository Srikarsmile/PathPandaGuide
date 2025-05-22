import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Force light mode only
    setTheme('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');

    // No theme listeners - always light mode
  }, []);

  // Handle theme change with transitions
  const handleThemeChange = (newTheme: Theme) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Apply theme class immediately to start transitions
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update state after transition completes
    setTimeout(() => {
      setTheme(newTheme);
      setIsTransitioning(false);
    }, 300); // Match this with your CSS transition duration
  };

  const toggleTheme = () => {
    // Always stay in light mode - do nothing
    return;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
