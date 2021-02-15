module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#1D71E1",
        lightblue: "#F7FAFD",
        darkgray: "#566B83",
        lightgray: "#7A86A2",
        black: "#27313E",
        extlightgray: "#FCFCFC"
      },
      minHeight: {
        '1/2': '50%',
        '570': '570px',
        '500': '500px',
        '470': '470px',
        '400': '400px',
        '300': '300px',
        '250': '250px'
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1380px",
          xl: "1480px"
        },
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '2rem'
        },
      },
      fontFamily: {
        'helevetica': ['Helvetica Neue'],
        'opensans': ['Open sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
