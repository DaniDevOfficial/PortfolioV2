
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    text: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#fcfdfd',
      '500': '#e7efea',
      '600': '#d2e1d7',
      '700': '#abc7b6',
      '800': '#96b9a3',
      '900': '#80aa90',
      base: '#e7efea',
    },
    background: {
      '50': '#559d71',
      '100': '#498660',
      '200': '#3c6f4f',
      '300': '#30583f',
      '400': '#264532',
      '500': '#192e21',
      '600': '#0c1710',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
      base: '#192e21',
    },
    primary: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#eaf3ed',
      '300': '#d3e7da',
      '400': '#c0ddcb',
      '500': '#a9d0b8',
      '600': '#92c3a5',
      '700': '#68ad83',
      '800': '#559c71',
      '900': '#498560',
      base: '#a9d0b8',
    },
    secondary: {
      '50': '#d3ebdd',
      '100': '#bbe0ca',
      '200': '#a2d4b7',
      '300': '#8ac9a3',
      '400': '#76c094',
      '500': '#5eb581',
      '600': '#4ba46f',
      '700': '#377851',
      '800': '#2c5f41',
      '900': '#214730',
      base: '#5eb581',
    },
  },
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  boxShadows: {},
}
  