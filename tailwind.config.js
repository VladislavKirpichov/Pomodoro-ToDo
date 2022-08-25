/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.js", "./public/index.html"],
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
