/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Exo 2', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#6A11CB',
        'brand-secondary': '#2575FC',
        'dark-bg': '#0A0F1F',
        'light-text': '#E0E7FF',
        'medium-text': '#8B949E',
        'card-bg': 'rgba(37, 117, 252, 0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
