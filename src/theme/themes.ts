import {
  PaletteColorOptions,
  Theme,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import { esES } from '@mui/material/locale'

/* PALETA DE COLORES */
const PRIMARY_COLORS: PaletteColorOptions = {
  light: '#06ABDF',
  main: '#0099CC',
  dark: '#0075B0',
  contrastText: '#fff',
}

const SECONDARY_COLORS: PaletteColorOptions = {
  main: '#EE2C70',
  contrastText: '#fff',
}

/* TEMAS */
export const THEME_LIGHT: Theme = responsiveFontSizes(
  createTheme(
    {
      palette: {
        mode: 'light',
        primary: {
          ...PRIMARY_COLORS,
        },
        secondary: {
          ...SECONDARY_COLORS,
        },
        common: {
          white: '#fff',
          black: '#101010',
        },
        background: {
          paper: '#fff',
          default: '#fff',
        },
      },
    },
    esES, // idioma español para los componentes de MUI (datepickers, etc)
  ),
  {
    factor: 5, // factor para tamaño de fuente responsive
  },
)

export const THEME_DARK: Theme = createTheme({
  ...THEME_LIGHT,
  palette: {
    mode: 'dark',
    primary: {
      ...THEME_LIGHT.palette.primary,
    },
    secondary: {
      ...THEME_LIGHT.palette.secondary,
    },
    background: {
      paper: '#151515',
      default: '#101010',
    },
  },
})
