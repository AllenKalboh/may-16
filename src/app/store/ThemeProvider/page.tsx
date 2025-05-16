"use client";
import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(true);
  };

  const valyu: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={valyu}> {children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "Use auth must be used witihin an <ThemeContext.Provider> </ThemeContext.Provider>"
    );
  }
  return context;
};

export default ThemeProvider;
