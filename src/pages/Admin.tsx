import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Table = lazy(() => import('../components/dashboard/Table'))

const Admin = () => {
  return (
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
  )
}

export default Admin
