import { MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ListItemIcon from '@mui/material/ListItemIcon'
import DownloadIcon from '@mui/icons-material/Download'
import HistoryIcon from '@mui/icons-material/History'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import Typography from '@mui/material/Typography'

const Elements = [
  {
    icon: <SyncAltIcon />,
    text: 'Sincronizar propuestas',
    onClick: () => {},
  },
  {
    icon: <HistoryIcon />,
    text: 'Revertir propuestas no sincronizadas',
    onClick: () => {},
  },
  {
    icon: <DownloadIcon />,
    text: 'Descargar reportes',
    onClick: () => {},
  },
]

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
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {Elements.map((element, index) => (
          <MenuItem key={index} onClick={element.onClick}>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <Typography variant='button' noWrap>
              {element.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default SelectOptions
