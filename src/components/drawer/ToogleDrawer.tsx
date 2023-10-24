import { Button } from '@mui/material'
import { useContext } from 'react'
import { DrawerContext } from './DrawerContext'

const ToogleDrawer = () => {
  const { setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <Button onClick={() => setIsOpenDrawer(true)} sx={{ mt: 2 }}>
      Abrir drawer
    </Button>
  )
}

export default ToogleDrawer
