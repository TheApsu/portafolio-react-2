/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272643',
        secondary: '#2C698D',
        text: '#FFFFFF',
        secondaryText: '#BAE8E8',
      },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
};
