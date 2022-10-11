module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'primary': '#0091ff',
        'primary-dark': '#20232A',
        'primary-light': '#e8594b',
        'secondary:': '#fff',
        'secondary-light:': '#f5f7fb',
        'secondary-dark': '#d9d9d9',
        'light-gray': '#f4f5f7',
        'orange-dark': '#BB493E',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },      
      color: {
        'primary': '#0091ff',
        'primary-dark': '#20232A',
        'primary-light': '#195949',
        'secondary:': '#fff',
        'secondary-light:': '#f5f7fb',
        'secondary-dark': '#d9d9d9',
        'orange-dark': '#BB493E',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
        'primary': '#0091ff',
        'primary-dark': '#20232A',
        'primary-light': '#e8594b',
        'secondary:': '#fff',
        'secondary-light:': '#f5f7fb',
        'secondary-dark': '#d9d9d9',
        'light-gray': '#f4f5f7',
        'orange-dark': '#BB493E',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};