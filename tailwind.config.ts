import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sanspro: ["Source Sans Pro", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        accordion: "10px 10px 0px -3px",
      },
      backgroundImage: {
        faceless: "url('/assets/faceless/pemandangan.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
