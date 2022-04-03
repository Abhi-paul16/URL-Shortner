module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {

    extend: {
      backgroundImage: {
        'desktop-shorten' : "url('/src/images/bg-shorten-desktop.svg')",
      },
      colors: {
        'Darkviolet' : 'hsl(257, 27%, 26%)',
      },
      fontFamily: { 
        'sans': ['Poppins', "sans-serif"],
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
