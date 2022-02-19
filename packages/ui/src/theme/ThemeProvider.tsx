import type { FC } from 'react'
import type { Themes } from './themes'

import React, { useCallback, useMemo, useState } from 'react'
import { makeClassesForCssVariables, makeRootVariables, useInjectCss } from '../style/css'
import { ThemeContext } from './context'
import { defaultThemes, ThemesTypes } from './themes'

type Props = {
  themes?: Themes
}

export const ThemeProvider: FC<Props> = ({ themes = defaultThemes, children }) => {
  const [currentTheme, setCurrentTheme] = useState<keyof ThemesTypes>(ThemesTypes.light)
  const theme = themes[currentTheme]
  const { colors } = theme

  const availableThemes = useMemo(() => Object.keys(themes), [themes])
  const changeTheme = useCallback(newTheme => setCurrentTheme(newTheme), [setCurrentTheme])

  const colorsVariables = makeRootVariables(colors)
  const variablesClasses = makeClassesForCssVariables(colors)

  useInjectCss(colorsVariables)
  useInjectCss(variablesClasses)

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme,
        changeTheme,
        availableThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
