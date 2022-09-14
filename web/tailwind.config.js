const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        galaxy: "url('images/background.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
