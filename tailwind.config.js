/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        "fluid-1": "clamp(1.89rem, calc(1.48rem + 2.03vw), 2.93rem)",
        "fluid-2": "clamp(3.27rem, calc(2.31rem + 4.79vw), 5.72rem)",
      },
      spacing: {
        "fluid-1": "clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)",
        "fluid-2": "clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)",
      },
    },
  },
  plugins: [],
};
