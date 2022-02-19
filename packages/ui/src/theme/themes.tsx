export type ThemesTypes = {
  light: 'light'
  dark: 'dark'

  [key: string]: string
}

export const ThemesTypes: ThemesTypes = {
  light: 'light',
  dark: 'dark',
}

export type ThemeColors = {
  primary: string
  secondary: string
  accent: string

  info: string
  warning: string
  error: string

  [key: string]: string
}

export type ThemeColorsNames = keyof ThemeColors

export type Theme = {
  colors: ThemeColors
}

export type Themes = {
  [key in keyof ThemesTypes]: Theme
}

export const defaultThemes: Themes = {
  [ThemesTypes.light]: {
    colors: {
      primary: 'green',
      secondary: 'blue',
      accent: 'white',

      info: 'orange',
      warning: 'orange',
      error: 'red',
    },
  },
  [ThemesTypes.dark]: {
    colors: {
      primary: 'darkblue',
      secondary: 'darkgreen',
      accent: 'darkorange',

      info: 'darkorange',
      warning: 'darkorange',
      error: 'darkred',
    },
  },
}
