/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sora': ['Sora', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'sans': ['Josefin Sans', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
    },
    screens: {
      "lg-small": { min:"1025px",max: "1280px" },
      "md-max": { min:"830px",max: "1024px" },
      "md-small": { min:"640px",max: "830px" },
      "sm-max": {min:"0px", max: "640px" },
    },
  },
  plugins: [],
}
