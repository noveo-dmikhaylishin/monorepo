import type { Theme } from './themes'

import { createContext, useContext } from 'react'
import { ThemesTypes, defaultThemes } from './themes'

type ThemeContext = {
  name: keyof ThemesTypes
  theme: Theme
  changeTheme: (theme: keyof ThemesTypes) => void
  availableThemes: (keyof ThemesTypes)[]
}

export const ThemeContext = createContext<ThemeContext>({
  name: ThemesTypes.light,
  theme: defaultThemes[ThemesTypes.light],
  changeTheme: () => {},
  availableThemes: [],
})

export const useTheme = () => useContext(ThemeContext)
