/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Plus-Jakarata' : ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    colors: {
      // Primary
      'Red': 'hsl(1, 90%, 64%)',
      'Blue' : 'hsl(219, 85%, 26%)',

      //Neutral
      'White': 'hsl(0, 0%, 100%)',
      'Very-light-grayish-blue': 'hsl(210, 60%, 98%)',
      'Light-grayish-blue-1': 'hsl(211, 68%, 94%)',
      'Light-grayish-blue-2': 'hsl(205, 33%, 90%)',
      'Grayish-blue': 'hsl(219, 14%, 63%)',
      'Dark-grayish-blue': 'hsl(219, 12%, 42%)',
      'Very-dark-blue': 'hsl(224, 21%, 14%)'
    },
    fontSize: {
      'custom': '8px',
      'sm': '0.875rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
