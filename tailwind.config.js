/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/header.jpg')",
        heroSmall: "url('../src/images/pexels-fernando-cortés-10068856.jpg')",
        heroLarge: "url('../src/images/tiamat-email.jpg')",
      },
    },
    screens: { md: "768px", lg: "1024px", xl: "1280", "2xl": "1536px" },
  },
  plugins: [],
};
