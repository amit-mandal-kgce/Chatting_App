/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#20B2AA",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};

