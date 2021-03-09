const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0061FF",
      },
    },
  },
  variants: {},
  plugins: [],
};
