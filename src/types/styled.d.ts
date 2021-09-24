import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'primary': string
      'primary:faded': string
      'secondary': string
      'secondary:faded': string
      'tertiary': string
      'tertiary:faded': string
      'danger': string
      'danger:faded': string
      'quarternary': string
      'text': string
    }
    fontWeight: {
      bold: number
      semibold: number
      regular: number
    }
  }
}
