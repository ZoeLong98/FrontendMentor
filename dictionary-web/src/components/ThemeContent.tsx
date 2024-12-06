"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface FontContextType {
  fontFamily: string;
  setFontFamily: (font: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const FontContext = createContext<FontContextType | undefined>(undefined);

const getPreferredTheme = () => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    return preferredTheme as "light" | "dark";
  }
  return "light";
};

const getPreferredFontFamily = () => {
  if (typeof window !== "undefined") {
    const storedFontFamily = localStorage.getItem("fontFamily");
    return storedFontFamily || "sans";
  }
  return "sans";
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme());
  const [fontFamily, setFontFamily] = useState(getPreferredFontFamily());

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add(fontFamily);
    localStorage.setItem("fontFamily", fontFamily);
    return () => {
      document.documentElement.classList.remove(fontFamily);
    };
  }, [fontFamily]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FontContext.Provider value={{ fontFamily, setFontFamily }}>
        {children}
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }

  return context;
};
