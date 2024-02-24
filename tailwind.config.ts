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
        'primary-blue': '#3F8CFF',

        'primary-gray-100': '#1C1C1C',
        'primary-gray-200': '#292929',
        'primary-gray-300': '#333333',
        
        'primary-white-100': '#fafafa',
      }
    },
  },
  plugins: [],
};
export default config;
