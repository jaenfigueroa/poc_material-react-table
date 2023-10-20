import { MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ListItemIcon from '@mui/material/ListItemIcon'
import DownloadIcon from '@mui/icons-material/Download'
import HistoryIcon from '@mui/icons-material/History'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { Typography } from '@mui/material'

const SelectOptions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon sx={{ color: 'white' }} fontSize='large' />
      </IconButton>

      {/* CONTENIDO MENU */}
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* sincroinzar propuestas */}
        <MenuItem>
          <ListItemIcon>
            <SyncAltIcon />
          </ListItemIcon>
          <Typography variant='button' noWrap>
            Sincronizar propuestas
          </Typography>
        </MenuItem>

        {/* revertir ultimos cambios */}
        <MenuItem>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <Typography variant='button' noWrap>
            Revertir propuestas no sincronizadas
          </Typography>
        </MenuItem>

        {/* descargar reportes */}
        <MenuItem>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <Typography variant='button' noWrap>
            Descargar reportes
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default SelectOptions
