import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary": "#599BD5",
      "secondary": "#C1DFFA",
      "ternary": "#E4F2FF",
      "tern": "#607180",
      "background": "#252C33",
      "secondary-background": "#303437",
      "scroll-bar": "#436179",
      "love-gradiant-start": "#DB49FF",
      "love-gradiant-end": "#FF3D00"
    }
  },
  plugins: [],
};
export default config;
