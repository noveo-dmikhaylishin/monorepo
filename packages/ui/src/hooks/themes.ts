import { useLayoutEffect, useRef } from 'react'

export enum ThemesTypes {
  light = 'light',
  dark = 'dark',
}

export type CssVariables = Record<string, string | number>

export type ThemeColors = {
  primary: string
  secondary: string
  accent: string

  info: string
  warning: string
  error: string
}

export type Theme = {
  colors: ThemeColors
}

export type Themes = {
  [key in ThemesTypes]: Theme
}

export const makeCssVariables = (variables: CssVariables): string =>
  Object.entries(variables).reduce((acc, [color, value]) => {
    acc += `--${color}: ${value};`

    return acc
  }, '')

export const makeCssColorsVariables = (colors: ThemeColors): string => `:root{${makeCssColorsVariables(colors)}}`

export const useInjectCss = (css: string) => {
  const style = useRef<HTMLStyleElement>(document.createElement('style'))

  useLayoutEffect(() => {
    style.current.innerHTML = `:root{${css}`
  }, [css])

  useLayoutEffect(() => {
    const styleElement = style.current

    document.body.appendChild(styleElement)

    return () => {
      document.body.removeChild(styleElement)
    }
  }, [])
}
