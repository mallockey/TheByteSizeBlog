// eslint-disable-next-line no-undef
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#1F2937',
      buttonHover: '#8B5CF6',
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
