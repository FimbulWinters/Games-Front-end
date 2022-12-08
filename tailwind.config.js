/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/header.jpg')",
        heroSmall: "url('../src/images/pexels-fernando-cortés-10068856.jpg')",
      },
    },
  },
  plugins: [],
};
