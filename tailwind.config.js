module.exports = {
  prefix: 'tw-',
  theme: {
    rotate: {
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '3d': ['0', '1', '0.5', '45deg']
    },
    translate: {
      '1/2': '50%',
      full: '100%',
      '-1/2': '-50%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px']
    },
    extend: {
      colors: {
        gray: '#3D3D3D',
        'gray-light': '#565759',
        'gray-lightest': '#9A9A9B',
        blue: '#218AC9'
      },
      inset: {
        '1/2': '50%'
      }
    }
  },
  variants: {
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],

    rotate: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive'],

    backgroundImage: ['hover'],
    backgroundColor: ['hover'],
    display: ['responsive', 'hover', 'focus']
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-full': {
          'background-size': '100%'
        },
        '.content-empty': {
          content: `""`
        }
      }

      addUtilities(newUtilities, ['responsive'])
    },
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')()
  ]
}
