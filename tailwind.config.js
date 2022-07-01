/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGreen: '#658F88',
        logoVue: '#289A1E',
        greyText: '#ABABAB',
      },
      spacing: {
        buttonIconWidth: '20px',
        buttonIconHeight: '20px',
        buttonDeskWidth: '92px',
        buttonDeskHeight: '46px',
        inputDeskWidth: '317px',
        inputDeskHeight: '46px',
      },
    },
  },
  plugins: [],
};
