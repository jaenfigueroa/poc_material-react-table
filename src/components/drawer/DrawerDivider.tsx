import { ReactNode, Suspense, lazy, useContext } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Skeleton from '@mui/material/Skeleton'
import { SectionDetailsSkeleton } from '../../ui/skeletons/SectionDetailsSkeleton'
import { SectionHistorySkeleton } from '../../ui/skeletons/SectionHistorySkeleton'
import { DrawerContext } from './DrawerContext'

const SectionRuleDetails = lazy(() => import('../SectionRuleDetails'))
const SectionAddProposal = lazy(() => import('../SectionAddProposal'))
const SectionProposalHistory = lazy(() => import('../SectionProposalHistory'))

const COLUMNS = [
  {
    order: 0,
    label: 'Detalles de la regla',
    component: <SectionRuleDetails />,
    Skeleton: <SectionDetailsSkeleton />,
  },
  {
    order: 1,
    label: 'Agregar propuesta',
    component: <SectionAddProposal />,
    Skeleton: <Skeleton animation='wave' variant='rounded' height={200} />,
  },
  {
    order: 2,
    label: 'Historial de propuestas',
    component: <SectionProposalHistory />,
    Skeleton: <SectionHistorySkeleton />,
  },
]

interface TabPanelProps {
  children?: ReactNode
  index: number
  columnActive: number
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, columnActive, index } = props

  return (
    <>
      {columnActive === index && (
        <Box sx={{ p: 3 }} style={{ background: '' }}>
          {children}
        </Box>
      )}
    </>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const DrawerDivider = () => {
  const { columnActive, setColumnActive } = useContext(DrawerContext)

  return (
    <Box sx={{ width: '100%' }}>
      {/* HEADER */}
      <AppBar position='static'>
        <Tabs
          value={columnActive}
          onChange={(_, newColumnValue) => setColumnActive(newColumnValue)}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
        >
          <Tab label='Detalles de la regla' {...a11yProps(0)} />
          <Tab label='Agregar propuesta' {...a11yProps(1)} />
          <Tab label='Historial de propuestas' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* MAIN */}
      {COLUMNS.map((column) => (
        <CustomTabPanel
          columnActive={columnActive}
          index={column.order}
          key={column.order}
        >
          <Suspense fallback={column.Skeleton}>{column.component}</Suspense>
        </CustomTabPanel>
      ))}
    </Box>
  )
}

export default DrawerDivider
