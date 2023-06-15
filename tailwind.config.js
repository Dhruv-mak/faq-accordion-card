/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        very_dark_desaturated_blue: "hsl(238, 29%, 16%)",
        soft_red: "hsl(14, 88%, 65%)",
        soft_violet: "hsl(273, 75%, 66%)",
        soft_blue: "hsl(240, 73%, 65%)",
        very_dark_grayish_blue: "hsl(237, 12%, 33%)",
        dark_grayish_blue: "hsl(240, 6%, 50%)",
        light_grayish_blue: "hsl(240, 5%, 91%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
