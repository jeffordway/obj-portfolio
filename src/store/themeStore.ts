import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  /**
   * Current color mode
   */
  colorMode: 'light' | 'dark';
  
  /**
   * Toggle between light and dark mode
   */
  toggleColorMode: () => void;
  
  /**
   * Set a specific color mode
   */
  setColorMode: (mode: 'light' | 'dark') => void;
}

/**
 * Theme store for managing color mode
 * 
 * Uses Zustand with persistence to maintain user preference across sessions
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // Default to dark mode
      colorMode: 'dark',
      
      toggleColorMode: () => 
        set((state) => ({ 
          colorMode: state.colorMode === 'light' ? 'dark' : 'light' 
        })),
      
      setColorMode: (mode) => 
        set({ colorMode: mode }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
