import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#A445ED",
        alert: "#FF5252",
        custom: {
          darkest: "#050505",
          darker: "#1F1F1F",
          dark: "#2D2D2D",
          mediumDark: "#3A3A3A",
          medium: "#757575",
          light: "#E9E9E9",
          lighter: "#F4F4F4",
          lightest: "#FFFFFF",
        },
      },
      fontFamily: {
        Inconsolata_Bold: ["Inconsolata-Bold", "monospace"],
        Inconsolata_Regular: ["Inconsolata-Regular", "monospace"],
        Inter_Regular: ["Inter-Regular", "sans-serif"],
        Lora_Bold: ["Lora-Bold", "serif"],
        Lora_Regular: ["Lora-Regular", "serif"],
        Lora_BoldItalic: ["Lora-BoldItalic", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
