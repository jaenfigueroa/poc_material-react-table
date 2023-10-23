import SelectOptions from '../../../ui/SelectOptions'
import HistoryIcon from '@mui/icons-material/History'
import AddIcon from '@mui/icons-material/Add'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ITEMS = [
  {
    icon: <ChromeReaderModeIcon />,
    text: 'Detalles de la regla',
    onClick: () => {},
  },
  {
    icon: <AddIcon />,
    text: 'Agregar propuesta',
    onClick: () => {},
  },
  {
    icon: <HistoryIcon />,
    text: 'Historial de propuestas',
    onClick: () => {},
  },
]

const SelectTableOptions = () => {
  return (
    <SelectOptions
      icon={<MoreVertIcon fontSize='medium' sx={{ color: 'gray' }} />}
      items={ITEMS}
    />
  )
}

export default SelectTableOptions