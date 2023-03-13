/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Ojol-default': '#4d73f8',
        'Ojol_dark': '#5E5E5E',
        'Ojol-disable': '#A5B1C2',
        'Ojol_light': '#eef0f0',
        'CDS_1': '#E97E00',
        'CDS_2': '#FFF3E6',
        'CDS_N-2': '#626262',
        'CDS_N-1': '#2F2E2E',
        'CDS_N-3': '#E7E7E7'

      },
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
