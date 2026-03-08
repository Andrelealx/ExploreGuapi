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
        guapi: {
          forest: "#1B4D2E",
          leaf: "#2E7D4F",
          water: "#52B788",
          spring: "#74C69D",
          earth: "#F2E8D5",
          granite: "#8B6F47",
          mist: "#F8F9F4",
          sky: "#87CEEB",
          night: "#0D1F16",
        },
      },
      boxShadow: {
        soft: "0 15px 40px rgba(7, 28, 18, 0.25)",
      },
      borderRadius: {
        organic: "1.25rem",
      },
      backgroundImage: {
        "forest-glow":
          "radial-gradient(circle at 10% 20%, rgba(116, 198, 157, 0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(82, 183, 136, 0.15), transparent 45%), linear-gradient(160deg, #0D1F16 0%, #123725 100%)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
