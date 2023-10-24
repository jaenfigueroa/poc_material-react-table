import { lazy } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import HistoryIcon from '@mui/icons-material/History'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import Badge from '@mui/material/Badge'
import StorageIcon from '@mui/icons-material/Storage'
import { ItemOfSelector } from '../../ui/SelectOptions'

const SelectOptions = lazy(() => import('../../ui/SelectOptions'))

const ITEMS: ItemOfSelector[] = [
  {
    icon: <SyncAltIcon />,
    text: 'Sincronizar propuestas',
    onClick: () => {
      console.log('Sincronizar propuestas')
    },
  },
  {
    icon: <HistoryIcon />,
    text: 'Revertir propuestas no sincronizadas',
    onClick: () => {
      console.log('Revertir propuestas no sincronizadas')
    },
  },
  {
    icon: <DownloadIcon />,
    text: 'Descargar reportes',
    onClick: () => {
      console.log('Descartar reportes')
    },
  },
]

const SelectProposalOptions = () => {
  return (
    <SelectOptions
      icon={
        <Badge badgeContent={4} color='primary'>
          <StorageIcon fontSize='medium' sx={{ color: 'white' }} />
        </Badge>
      }
      items={ITEMS}
    />
  )
}

export default SelectProposalOptions
