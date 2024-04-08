import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: {
        '50': "#FFFFFF"
      },
      blue: {
        '50': '#ebf5ff',
        '100': '#dbebff',
        '200': '#bedaff',
        '300': '#97bfff',
        '400': '#6e98ff',
        '500': '#4c73ff',
        '600': '#203fff',
        '700': '#2037e2',
        '800': '#1d32b6',
        '900': '#20328f',
        '950': '#131c53',
    },
    grey: {
      "50": "#F7F8FF",
      "100":"#F1F3FF",
      "200": "#EAEDFF",
      "300": "#B6B9CC",
      "400": "#AEAEAE",
      "500": "#D9D9D9",
      "600": "#C0C0C0",
      "700": "#C5C5C5",
      "800": "#A9A9A9",
      "850": "#A7A7A7",
      "900": "#909AA8",
      "950": "#8E8E8E"
    }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
