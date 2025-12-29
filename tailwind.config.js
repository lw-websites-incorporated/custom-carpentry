/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(red|green|blue|yellow|amber|rose|lime|orange|gray|slate|neutral|stone|purple|pink|teal|cyan|indigo|violet|fuchsia|emerald|sky|zinc|brown)-(\d{2,3})$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#089DC0',
        secondary: '#1E1E1E',
        accent: '#E8F4F8',
        'accent-gray': '#F5F5F5',
        dark: '#1E1E1E',
      },
    },
  },
  plugins: [],
}
