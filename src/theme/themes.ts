import { PaletteColorOptions, Theme, createTheme, responsiveFontSizes } from '@mui/material'

/* MODIFICAR */
declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    ligther?: string
    light?: string
    main?: string
    dark?: string
    contrastText?: string
  }
}

/* PALETA DE COLORES */
const PRIMARY_COLORS: PaletteColorOptions = {
  ligther: '#99C8DF',
  light: '#06ABDF',
  main: '#0099CC',
  dark: '#0075B0',
  contrastText: '#fff',
}

const SECONDARY_COLORS: PaletteColorOptions = {
  main: '#EE2C70',
  contrastText: '#fff',
}

// TEMA CLARO CON FUENTE RESPONSIVE
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

// TEMA OSCURO HEREDANDO FUENTE RESPONSIVE
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
