import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { DrawerProvider } from '../components/drawer/DrawerContext'
import { LinearProgress } from '@mui/material'

const Table = lazy(() => import('../components/main/Table.tsx'))
const DrawerMain = lazy(() => import('../components/drawer'))

const Admin = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <DrawerProvider>
        {/* TABLA */}
        <Suspense
          fallback={
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={'90vh'}
            >
              <CircularProgress />{' '}
            </Box>
          }
        >
          <Table />
        </Suspense>
        {/* DRAWER DERECHA */}
        <DrawerMain />
      </DrawerProvider>
    </Suspense>
  )
}

export default Admin
