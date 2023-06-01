/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        polySans: ['url("/fonts/PolySans-Median.otf") format("otf")'],
      },
      colors: {
        va: {
          blue: '#3232FB',
          black: '#1A1A1A',
          coral: '#FF6E40',
          forest: '#005B25',
          lime: '#DCFF78',
          lavender: '#EDE9FF',
          background: '#F4F4F4',
        },
      },
    },
  },
  plugins: [],
};
