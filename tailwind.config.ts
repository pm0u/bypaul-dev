import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: {
        0: "#fbf3db",
        1: "#ece3cc",
        2: "#d5cdb6",
      },
      dim: {
        0: "#909995",
      },
      fg: {
        0: "#53676d",
        1: "#3a4d53",
      },
      red: "#d2212d",
      "red-br": "#cc1729",
      green: "#489100",
      "green-br": "#428b00",
      yellow: "#ad8900",
      "yellow-br": "#a78300",
      blue: "#0072d4",
      "blue-br": "#006dce",
      magenta: "#ca4898",
      "magenta-br": "#c44392",
      cyan: "#009c8f",
      "cyan-br": "#00978a",
      orange: "#c25d1e",
      "orange-br": "#bc5819",
      violet: "#8762c6",
      "violet-br": "#825dc0",
    },
    fontFamily: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
