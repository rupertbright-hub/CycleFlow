// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Monda'],
      },
    },
    variants: {},
    plugins: [
      // require('@tailwindcss/ui'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};
