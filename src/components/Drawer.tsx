import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { Suspense, lazy, useState } from 'react'
import { LinearProgress } from '@mui/material'
const MoreInfo = lazy(() => import('./MoreInfo'))

const TemporaryDrawer = () => {
  const [isVisible, setIsVisible] = useState(false)

  // ABRIR EL DRAWER
  const toggleDrawer = (open: boolean) => () => {
    setIsVisible(open)
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ mt: 32 }}>
        Abrir drawer
      </Button>
      <Drawer anchor='right' open={isVisible} onClose={toggleDrawer(false)}>
        <Box sx={{ width: '600px' }}>
          {/* CONTENDIDO */}
          <Suspense fallback={<LinearProgress />}>
            <MoreInfo />
          </Suspense>
        </Box>
      </Drawer>
    </>
  )
}

export default TemporaryDrawer
