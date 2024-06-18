/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "oswald": ["Oswald", "sans-serif"]
      },
      colors:{
        "safaricom": "#2ab148",
        "airtel": "#ea1821",
        "hillganred": "#bc3333",
        'theme-default': '#bc3333',
        'theme-default-dark': '#212121',
        'theme-amber': '#fbc02d',
        'theme-amber-dark': '#212121',
        'theme-amethyst': '#7b1fa2',
        'theme-amethyst-dark': '#212121',
        'theme-cobalt': '#1976d2',
        'theme-cobalt-dark': '#212121',
        'theme-emerald': '#388e3c',
        'theme-emerald-dark': '#212121',
        'theme-ruby': '#d32f2f',
        'theme-ruby-dark': '#212121'
      }
    },
  },
  plugins: [],
};
