/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aktiv': ['Aktiv Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}