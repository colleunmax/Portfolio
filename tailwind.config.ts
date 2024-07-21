import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#599BD5",
        "secondary": "#C1DFFA",
        "ternary": "#E4F2FF",
        "tern": "#607180",
        "background": "#252C33",
        "secondary-background": "#303437",
        "scroll-bar": "#436179",
        "love-gradiant-start": "#DB49FF",
        "love-gradiant-end": "#FF3D00",
      },
      screens: {
        "intermediate-md": { "min": "1400px"}
      }
    }
  },
  plugins: [],
};
export default config;
