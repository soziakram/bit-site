/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black: "#000000", // Add a new color with the value of black
      },
      backgroundImg: {
        "pc-title":
          "url('/img/https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80')",
      },
    },
  },
  plugins: [require("daisyui")],
};
