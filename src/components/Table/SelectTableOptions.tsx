import { memo, useCallback, useContext } from 'react'
import SelectOptions, { ItemOfSelector } from '../../ui/SelectOptions'
import HistoryIcon from '@mui/icons-material/History'
import AddIcon from '@mui/icons-material/Add'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { DrawerContext } from '../drawer/DrawerContext'

const SelectTableOptions = memo(() => {
  const { setIsOpenDrawer, setColumnActive } = useContext(DrawerContext)

  const handleItemClick = useCallback(
    (columnIndex: number) => () => {
      setIsOpenDrawer(true)
      setColumnActive(columnIndex)
    },
    [setIsOpenDrawer, setColumnActive],
  )

  const ITEMS: ItemOfSelector[] = [
    {
      icon: <ChromeReaderModeIcon />,
      text: 'Detalles de la regla',
      onClick: handleItemClick(0),
    },
    {
      icon: <AddIcon />,
      text: 'Agregar propuesta',
      onClick: handleItemClick(1),
    },
    {
      icon: <HistoryIcon />,
      text: 'Historial de propuestas',
      onClick: handleItemClick(2),
    },
  ]

  return (
    <SelectOptions icon={<MoreHorizIcon fontSize='small' />} items={ITEMS} />
  )
})

export default SelectTableOptions
