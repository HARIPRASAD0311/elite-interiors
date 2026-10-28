/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elite: {
          bg: '#FAF7F2',
          cream: '#F6F2EB',
          sand: '#EFE9DE',
          card: '#FFFFFF',
          dark: '#1C1A17',
          charcoal: '#24211D',
          muted: '#716C64',
          gold: '#C5A059',
          goldDark: '#BA9158',
          goldLight: '#D8B67D',
          border: '#E8E1D5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D7B174 0%, #BA9158 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #DEBA7E 0%, #C3995E 100%)',
      }
    },
  },
  plugins: [],
};

