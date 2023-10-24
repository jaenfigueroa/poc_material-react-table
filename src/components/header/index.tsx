import { Suspense, lazy, useContext } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { AppContext } from '../../context/AppContext'

const SelectProposalOptions = lazy(() => import('./SelectProposalOptions'))
const SelectProfileOptions = lazy(() => import('./SelectProfileOptions'))
const ToogleTheme = lazy(() => import('../../theme/toogleTheme'))

export default function ButtonAppBar() {
  const theme = useTheme()
  const { isLogged } = useContext(AppContext)

  return (
    <Box
      sx={{ flexGrow: 1 }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={0.5}
      pl={1}
      style={{
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <Box>
        {/* LOGO */}
        <Typography
          variant='h5'
          component='h1'
          sx={{ flexGrow: 1 }}
          fontWeight={'bold'}
          color={'white'}
        >
          Pacifico
        </Typography>
      </Box>
      <Box>
        {/* ALTERNAR TEMA */}
        <Suspense>
          <ToogleTheme />
        </Suspense>

        {/* SELECTORES DE OPCIONES DE PROPOSICIONES Y PERFIL */}
        {isLogged && (
          <Suspense>
            <SelectProposalOptions />
            <SelectProfileOptions />
          </Suspense>
        )}
      </Box>
    </Box>
  )
}
