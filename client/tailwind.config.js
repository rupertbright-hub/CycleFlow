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
      spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
                }
      
    },
    variants: {},
    plugins: [
      // require('@tailwindcss/ui'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};
