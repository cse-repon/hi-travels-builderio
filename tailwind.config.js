const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          page: '#FAF8F7',
          card: '#FFF',
          recessed: '#E4DCD9',
          accent: '#3E2D3F',
        },
        text: {
          primary: '#2D2533',
          secondary: '#3E2D3F',
          invert: '#FFF',
        },
        spirituals: {
          card: '#050505',
          accent: '#D5A835',
          recessed: '#2E2B2B',
        },
        women: {
          card: '#D6A4AF',
          accent: '#43282E',
          recessed: '#B27382',
        },
        students: {
          card: '#C8EDEA',
          accent: '#33514F',
          recessed: '#A4D8D4',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        geist: ['Geist', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
