/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        lora:"'Lora', serif",
        roboto:"roboto,sans-serif",
        lobster:"'Lobster', sans-serif"
      },
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
      maxWidth:{
        container: "1280px"
      }
    },
  },
  plugins: [require("daisyui")],
};
