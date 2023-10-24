import { Suspense, lazy } from 'react'
import Grid from '@mui/material/Grid'
import { TableSkeleton } from '../ui/skeletons/TableSkeleton'
import { AsideSkeleton } from '../ui/skeletons/AsideSkeleton'

const Aside = lazy(() => import('../components/dashboard/Aside'))
const Table = lazy(() => import('../components/dashboard/Table'))

const Admin = () => {
  return (
    <Grid container p={3} pt={4} spacing={3}>
      <Grid item xs={4} sm={3} lg={2} xl={1.5}>
        <Suspense fallback={<AsideSkeleton />}>
          {/* CONTENEDOR DE FILTROS */}
          <Aside />
        </Suspense>
      </Grid>
      <Grid item xs={8} sm={9} lg={10} xl={10.5}>
        <Suspense fallback={<TableSkeleton />}>
          {/* CONTENEDOR DE TABLA */}
          <Table />
        </Suspense>
      </Grid>
    </Grid>
  )
}

export default Admin
