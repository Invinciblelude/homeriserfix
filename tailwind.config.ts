import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury dark palette
        obsidian: {
          950: "#0a0a0a",
          900: "#0f0f0f",
          800: "#171717",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
        // Warm brass/gold accent
        brass: {
          50: "#fdf9f3",
          100: "#f9f0e1",
          200: "#f2dfc2",
          300: "#e9c899",
          400: "#dcaa65",
          500: "#d4954a",
          600: "#c67d3d",
          700: "#a56234",
          800: "#854f30",
          900: "#6c422a",
        },
        // Warm cream for text
        cream: {
          50: "#fefdfb",
          100: "#fdfaf5",
          200: "#faf5eb",
          300: "#f5ebe0",
          400: "#e8dcc9",
          500: "#d4c4a8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        goldShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #d4954a 0%, #e9c899 50%, #d4954a 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)",
        noise: "url('/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;

