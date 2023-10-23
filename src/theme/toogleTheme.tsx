import { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import useTheme from '@mui/material/styles/useTheme'
import { ColorModeContext } from './themeContext'

const ToogleTheme = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'dark' ? (
        <DarkModeIcon fontSize='medium' />
      ) : (
        <LightModeIcon fontSize='medium' />
      )}
    </IconButton>
  )
}

export default ToogleTheme
