/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        100: '#F8DDE0',
        200: '#F0BBC0',
        300: '#E998A1',
        400: '#E17681',
        500: '#DA5462',
        600: '#BE4753',
        700: '#A13944',
        800: '#852C35',
        900: '#681E26'
      },
      neutral: {
        black: '#121212',
        white: '#fdfdfd'
      },
      greys: {
        light: '#E5E5E5',
        dark: '#4F4F4F'
      },
      feedback: {
        information: '#005CC7',
        success: '#00C714',
        warning: '#C15C00',
        error: '#C70000'
      }
    },
    extend: {},
  },
  plugins: [],
}

