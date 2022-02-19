import { useLayoutEffect, useRef } from 'react'

export type CssVariables = Record<string, string | number>

export const makeCssVariables = (variables: CssVariables): string =>
  Object.entries(variables).reduce((acc, [color, value]) => {
    acc += `--${color}:${value};`

    return acc
  }, '')

export const makeClassesForCssVariables = (variables: CssVariables): string =>
  Object.keys(variables).reduce((acc, color) => {
    acc += `.${color}{background:var(--${color})!important;}`
    acc += `.${color}--text{color:var(--${color})!important;}`

    return acc
  }, '')

export const makeRootVariables = (colors: CssVariables) => `:root{${makeCssVariables(colors)}}`

export const useInjectCss = (css = '') => {
  const style = useRef<HTMLStyleElement>(document.createElement('style'))

  useLayoutEffect(() => {
    style.current.innerHTML = css
  }, [css])

  useLayoutEffect(() => {
    const styleElement = style.current

    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])
}
