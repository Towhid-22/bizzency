/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
      },
      colors: {
        primary: "#0f2f44",
        whitecolor: "#ffffff",
        secondary: "#8484bf",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        abril_fatfaace: ["Abril Fatface", "serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('./images/banner.png')"
      }
    },
  },
  plugins: [],
}

