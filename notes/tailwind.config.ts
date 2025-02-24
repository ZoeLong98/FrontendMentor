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
        blue_50: "#EBF1FF",
        blue_500: "#335CFF",
        blue_700: "#2547D0",
        neutral_0: "#FFFFFF",
        neutral_50: "#F5F7FA",
        neutral_100: "#F3F5F8",
        neutral_200: "#E0E4EA",
        neutral_300: "#CACFD8",
        neutral_400: "#99A0AE",
        neutral_500: "#717784",
        neutral_600: "#525866",
        neutral_700: "#2B303B",
        neutral_800: "#232530",
        neutral_900: "#191B25",
        neutral_950: "#0E121B",
        green_100: "#D1FBE9",
        green_500: "#21C16B",
        red_100: "#FFD5D8",
        red_500: "#FB3748",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(70px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
