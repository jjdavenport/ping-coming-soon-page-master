/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        libreFranklin: ["libre franklin", "sans-serif"],
      },
      colors: {
        blue: "hsl(220, 70%, 50%)",
        orange: "hsl(34, 85%, 45%)",
        green: "hsl(160, 61%, 50%)",
        lightGray: "hsl(210, 16%, 93%)",
        darkGrey: "hsl(220, 22%, 15%)",
      },
    },
  },
  plugins: [],
};
