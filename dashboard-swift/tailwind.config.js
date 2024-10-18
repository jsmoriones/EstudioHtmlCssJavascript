/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/MenuAccordion.jsx"
  ],
  theme: {
    extend: {
      colors: {
        "colorMenuText": "#bdbdbd",
        "e7e7e7": "#e7e7e7",
        "f8f6f2": "#f8f6f2"
      }
    }
  },
  plugins: [
  ]
}

