/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xsm": "10px",
        "xsm": "12px",
        "sm": "13px",
        "reg": "15px",
        "lg": "18px",
        "2xl": "22px",
        "3xsm": "25px",
        "4xsm": "32px",
        "5xsm": "40px",
        "6xsm": "50 px",
        "7xsm": "60px",
        "8xsm": "70px",
        "9xsm": "80px",
      }
    },
  },
  plugins: [],
}

