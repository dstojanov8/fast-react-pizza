/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      //* Example for font size
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
