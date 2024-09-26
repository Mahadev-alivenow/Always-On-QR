/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(20, 1, 203)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(18deg, rgb(20, 1, 203), rgba(20, 1, 203, 0.8))", // 180deg for top to bottom
        // "custom-gradient":
        //   "linear-gradient(180deg, rgb(20, 1, 203), rgba(0, 0, 0, 0.4))", // top to bottom from customBlue to lighter black
      },
      fontFamily: {
        customB: ["MB", "sans-serif"],
        customL: ["ML", "sans-serif"],
        customR: ["MR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
