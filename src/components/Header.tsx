import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ToogleTheme from '../theme/toogleTheme'
import { Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AppContext } from '../context/AppContext'
import SelectOptions from './drawer/SelectOptions'

export default function ButtonAppBar() {
  const theme = useTheme()
  const { isLogged } = React.useContext(AppContext)

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
            variant='h4'
            component='div'
            sx={{ flexGrow: 1 }}
            fontWeight={'bold'}
          >
            Pacifico
          </Typography>

          {/* ALTERNAR TEMA */}
          <ToogleTheme />

          {/* SELECTOR DE OPCIONES Y LA FOTO DE PERFIL */}
          {isLogged && (
            <>
              <SelectOptions />
              <Avatar style={{ marginLeft: 15 }} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
