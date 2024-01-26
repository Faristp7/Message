/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "slogan-text": ["nunito", "Open Sans"],
      },
    },
  },
  plugins: [daisyui],
};
