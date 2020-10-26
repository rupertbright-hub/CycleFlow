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
                },
        
     backgroundImage: {
        hero: "url('./hero.jpg')",
    },

    opacity: {
        '80': '.8',
        '90':'.9',
    },

    variants: {},
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
}
}
