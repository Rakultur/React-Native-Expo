import React, { createContext, useContext, useState } from "react";
import { customTheme } from "./custom";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { Theme } from "./types";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: {
    light: Theme;
    dark: Theme;
    custom: Theme;
  };
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes: {
          light: lightTheme,
          dark: darkTheme,
          custom: customTheme,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}