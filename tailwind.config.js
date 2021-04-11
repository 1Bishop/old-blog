module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	  colors: { 
        // Primary Colors 
        // Light Grey: f1f2f2
        // Dark Blue: 0b1422
        // Light Blue: 92ccef
        'light-grey': '#f1f2f2',
        'dark-blue': '#0b1422',
        'light-blue': '#92ccef',

        // Dark Mountain Blues:
        // Shade - 142844
        // Light - 2d486c
        'dm-shade': '#142844',
        'dm-light': '#2d486c',

        // Light Mountain Blues:
        // Shade - 92ccef
        // Light - ebf7fc
        'lm-shade': '#92ccef',
        'lm-light': '#ebf7fc',

        // Additional Blue that is not used often but can be added - 2c6baf (Saturated Neutral Blue)
        'neutral-blue': '#2c6baf'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
