/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        secondary: '#3B82F6', 
        accent: '#FBBF24', 
        darkGray: '#1F2937', 
        lightGray: '#F3F4F6', 
        premiumGray: '#F9FAFB', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
