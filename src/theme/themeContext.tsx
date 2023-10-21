import { PropsWithChildren, createContext, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { THEME_DARK, THEME_LIGHT } from './themes'
import useLocalStorage from '../hook/useLocalStorage'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ToggleColorMode = ({ children }: PropsWithChildren) => {
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
