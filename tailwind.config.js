/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: ['jit'],
  purge: ['./*.html'],
  content: ['./*.html'],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px"
    },
    fontFamily:{
      sans: ['lato', 'open-sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg.png')"
      },
      colors:{
        "lilac": "#a29fe3",
        "green": "#104547",
        "textBlack": "#00100B",
        "lightGreen": "#499167",
        "textWhite": "#e4e4e4"
      }
    },
  },
  plugins: [],
}

