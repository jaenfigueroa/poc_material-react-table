import { PropsWithChildren, createContext, useMemo } from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import { THEME_DARK, THEME_LIGHT } from './themes'
import useLocalStorage from '../hook/useLocalStorage'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ThemeModeProvider = ({ children }: PropsWithChildren) => {
  // Utilizamos el hook useLocalStorage para almacenar y recuperar la preferencia del tema
  const [mode, setMode] = useLocalStorage<'light' | 'dark'>('theme', 'light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // Cambiamos el tema y almacenamos la preferencia en localStorage
        setMode(mode === 'light' ? 'dark' : 'light')
      },
    }),
    [mode, setMode],
  )

  const theme = useMemo(
    () => createTheme(mode === 'light' ? THEME_LIGHT : THEME_DARK),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
