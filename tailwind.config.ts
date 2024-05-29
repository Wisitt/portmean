/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1520px",
      },
    },
    extend: {
      colors: {
        primary: "#6E2D27",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
