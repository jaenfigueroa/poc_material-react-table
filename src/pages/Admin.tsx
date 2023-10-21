import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const Aside = lazy(() => import('../components/main/Aside'))
const DataTable = lazy(() => import('../components/main/TableExample'))

const Admin = () => {
  return (
    <Box display={'flex'} gap={3} p={3}>
      {/* CONTENEDOR DE FILTROS */}
      <Box minWidth={230} width={230}>
        <Suspense fallback={<LinearProgress />}>
          <Aside />
        </Suspense>
      </Box>

      {/* CONTENEDOR DE TABLA */}
      <Box flexGrow={1}>
        <Suspense fallback={<LinearProgress />}>
          <DataTable />
        </Suspense>
      </Box>
    </Box>
  )
}

export default Admin
