/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        PtSerif: "'PT Serif', serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
