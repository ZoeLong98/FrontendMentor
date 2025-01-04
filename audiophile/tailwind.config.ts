import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryHover: "var(--primaryHover)",
        secondary: "var(--secondary)",
        warmWhite: "var(--warmWhite)",
        lightGray: "var(--lightGray)",
        golden: "var(--golden)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        componentMax: "1110px",
      },
      backgroundImage: {
        "header-bg-dt": "url('/home/desktop/image-hero.jpg')",
      },
      letterSpacing: {
        customizeWide: "10px",
      },
      height: {
        "500": "500px",
        "560": "560px",
        "660": "660px",
      },
    },
  },
  plugins: [],
} satisfies Config;
