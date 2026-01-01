/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
       extend: {
      colors: {
        primary: "#233B6C",
        lightest: "#EEEEEE",
      }
    }
  },
  plugins: [],
};
