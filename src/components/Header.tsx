import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ListItemIcon from '@mui/material/ListItemIcon'
import DownloadIcon from '@mui/icons-material/Download'
import HistoryIcon from '@mui/icons-material/History'
import ToogleTheme from '../theme/toogleTheme'
import { Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AppContext } from '../context/AppContext'

export default function ButtonAppBar() {
  const theme = useTheme()
  const { isLogged } = React.useContext(AppContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} fontWeight={'bold'}>
            Pacifico
          </Typography>

          {/* ALTERNAR TEMA */}
          <ToogleTheme />

          {isLogged && (
            <>
              {/* selector */}
              <IconButton onClick={handleClick}>
                <MoreVertIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>

              <Menu
                id='long-menu'
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <Typography variant='button' noWrap>
                    Revertir cambios
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DownloadIcon />
                  </ListItemIcon>
                  <Typography variant='button' noWrap>
                    Descargar reportes
                  </Typography>
                </MenuItem>
              </Menu>

              {/* AVATAR */}
              <Avatar style={{ marginLeft: 15 }} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
