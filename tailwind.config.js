module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#CF2D76",
        darkBlue: "#1a0e60",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
