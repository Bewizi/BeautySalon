/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: [{ min: "100px", max: "640px" }],
      md: [{ min: "640px", max: "808px" }],
      lg: [{ min: "808px", max: "1100px" }],
      xl: [{ min: "1100px", max: "1600px" }],
    },
    extend: {},
  },
  plugins: [],
};
