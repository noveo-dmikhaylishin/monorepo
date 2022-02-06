import type { FC } from 'react'
import type { Themes } from '../hooks/useThemes'

import { useState } from 'react'

import { useCssVariables, ThemesTypes } from '../hooks/useThemes'

type Props = {
  themes: Themes
}

export const ThemeProvider: FC<Props> = ({ themes }) => {
  const [currentTheme, setCurrentTheme] = useState(ThemesTypes.light)

  const cssVariables = useCssVariables(themes, currentTheme)

  console.log(cssVariables)
  return (
    <>
    </>
  )
}
