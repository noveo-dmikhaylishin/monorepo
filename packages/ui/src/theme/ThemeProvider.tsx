import type { FC } from 'react'
import type { Themes } from './themes'

import React, { useCallback, useMemo, useState } from 'react'
import { useInjectVariables } from '../style/css'
import { ThemeContext } from './context'
import { defaultThemes, ThemesTypes } from './themes'

type Props = {
  themes?: Themes
}

const useThemeState = (themes: Themes) => {
  const [currentTheme, setCurrentTheme] = useState<keyof ThemesTypes>(ThemesTypes.light)
  const theme = themes[currentTheme]

  const availableThemes = useMemo(() => Object.keys(themes), [themes])
  const changeTheme = useCallback(newTheme => setCurrentTheme(newTheme), [setCurrentTheme])

  return {
    theme,
    currentTheme,
    availableThemes,
    changeTheme,
  }
}

export const ThemeProvider: FC<Props> = ({ themes = defaultThemes, children }) => {
  const { theme, currentTheme, changeTheme, availableThemes } = useThemeState(themes)

  useInjectVariables(theme.colors)

  return (
    <ThemeContext.Provider
      value={{
        name: currentTheme,
        theme,
        changeTheme,
        availableThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
