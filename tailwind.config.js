
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
