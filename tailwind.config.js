/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/images/hackathonbg.jpg')",
      },
      colors: {
        temp: "#240554",
        cont: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
