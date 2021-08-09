module.exports = {
  mode: "jit",
  purge: [ require("tailwind-gradient-mask-image"), './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}