/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        "0f": "#0f0f0f",
        46: "#464646",
        "2d": "#2d2d2d",
        "1db954": "#1db954",
        "0c0c0c": "#0c0c0c",
      },
      fontFamily: {
        HighriseBold: "HighriseBold",
      },
    },
  },
  plugins: [],
};
