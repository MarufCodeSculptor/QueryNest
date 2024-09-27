/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5965E0",
        secondary: "#F5F5F5",
        success: "#2196F3",
        warning: "#FFC107",
        error: "#F44336",
        info: "#2196F3",
        light: "#F5F5F5",
        dark: "#212121",
      },
    },
  },
  plugins: [require("daisyui")],
};
