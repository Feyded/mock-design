import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
      },
      animation: {
        bounceX: "bounceX 1s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cryptoBackground: "#081028",
        cryptoCards: "#0b1739",
        cryptoCardsOutline: "#232b44",
        cryptoButton: "#cb3cff",
        cryptoGradientEnd: "#7f25fb",
        // MOCK DESIGN COLORS
        loginButton: "#106580",
        darkBackground: "#191919",
        span: "#fbc94a",
        smallCardLabel: "#747474",
      },
    },
  },
  plugins: [],
};
export default config;
