import { Suspense, lazy, useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ToogleTheme from '../../theme/toogleTheme'
import useTheme from '@mui/material/styles/useTheme'
import LinearProgress from '@mui/material/LinearProgress'
import { AppContext } from '../../context/AppContext'

const SelectProposalOptions = lazy(() => import('./SelectProposalOptions'))
const SelectProfileOptions = lazy(() => import('./SelectProfileOptions'))

export default function ButtonAppBar() {
  const theme = useTheme()
  const { isLogged } = useContext(AppContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      >
        <Toolbar>
          {/* LOGO */}
          <Typography
            variant='h5'
            component='h1'
            sx={{ flexGrow: 1 }}
            fontWeight={'bold'}
          >
            Pacifico
          </Typography>

          {/* ALTERNAR TEMA */}
          <ToogleTheme />

          {/* SELECTORES DE OPCIONES DE PROPOSICIONES Y PERFIL */}
          {isLogged && (
            <Suspense fallback={<LinearProgress />}>
              <SelectProposalOptions />
              <SelectProfileOptions />
            </Suspense>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
