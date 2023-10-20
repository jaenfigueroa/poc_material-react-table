import {
  PaletteColorOptions,
  Theme,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'

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
  createTheme({
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
        black: '#151515',
      },
      background: {
        paper: '#fff',
        default: '#fafafa',
      },
    },
  }),
  {
    factor: 5, // factor para la fuente responsive
  }
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
      default: '#151515',
    },
  },
})
