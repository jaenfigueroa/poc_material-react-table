import { Suspense, lazy, useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'

const DrawerDivider = lazy(() => import('./DrawerDivider'))

const DrawerMain = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  // ABRIR EL DRAWER
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerVisible(open)
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ mt: 32 }}>
        Abrir drawer
      </Button>
      <Drawer
        anchor='right'
        open={isDrawerVisible}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: '600px' }}>
          {/* CONTENDIDO */}
          <Suspense fallback={<LinearProgress />}>
            {/* <DrawerDivider /> */}
            <DrawerDivider />
          </Suspense>
        </Box>
      </Drawer>
    </>
  )
}

export default DrawerMain
