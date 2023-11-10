/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#20c997",
        mainWhite: "#f8f9fa ",
        mainLight: "#d7f5ec",
        mainBlack: "#343a40",
        mainBlackLight: "#4b5563",
      },
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
