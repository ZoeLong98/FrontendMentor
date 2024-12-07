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
    const storedTheme = localStorage.getItem("theme_dic");
    const preferredTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    return preferredTheme as "light" | "dark";
  }
  return "light"; // 默认值
};

const getPreferredFontFamily = () => {
  if (typeof window !== "undefined") {
    const storedFontFamily = localStorage.getItem("fontFamily_dic");
    return storedFontFamily || "sans"; // 默认字体
  }
  return "sans"; // 默认值
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontFamily, setFontFamily] = useState("sans");

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    const preferredFontFamily = getPreferredFontFamily();
    setFontFamily(preferredFontFamily);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme_dic", theme);
    }
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.add(fontFamily);
    if (typeof window !== "undefined") {
      localStorage.setItem("fontFamily_dic", fontFamily);
    }
    return () => {
      document.documentElement.classList.remove(fontFamily);
    };
  }, [fontFamily]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

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
