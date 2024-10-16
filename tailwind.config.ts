import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pet-bg': "url('../assets/petsaborREAL.png')",
      },
      backgroundSize: {
        'custom': '50%', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "forest-green": "#008601",
        "pet-orange": "#ff8201"
      },
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
