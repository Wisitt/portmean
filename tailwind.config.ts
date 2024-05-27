/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E2D27",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStroke: {
        DEFAULT: "2px white",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: object, variants?: string[]) => void;
    }) {
      addUtilities(
        {
          ".text-outline-white": {
            "-webkit-text-stroke": "0.5px white",
            color: "transparent",
          },
          ".text-outline-white2": {
            "-webkit-text-stroke": "1px white",
            color: "transparent",
          },
        },
        ["responsive"]
      );
    },
  ],
};
