import { ReactNode, Suspense, SyntheticEvent, lazy, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Skeleton from '@mui/material/Skeleton'
import { SectionDetailsSkeleton } from '../../ui/skeletons/SectionDetailsSkeleton'
import { SectionHistorySkeleton } from '../../ui/skeletons/SectionHistorySkeleton'

const SectionRuleDetails = lazy(() => import('./SectionRuleDetails'))
const SectionAddProposal = lazy(() => import('./SectionAddProposal'))
const SectionProposalHistory = lazy(() => import('./SectionProposalHistory'))

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const DrawerDivider = () => {
  const [value, setValue] = useState(1)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Detalles de la regla' {...a11yProps(0)} />
          <Tab label='Agregar propuesta' {...a11yProps(1)} />
          <Tab label='Historial de propuestas' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <CustomTabPanel value={value} index={0}>
        <Suspense fallback={<SectionDetailsSkeleton />}>
          {/* CONTENIDO */}
          <SectionRuleDetails />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Suspense
          fallback={
            <Skeleton animation='wave' variant='rounded' height={200} />
          }
        >
          {/* CONTENIDO */}
          <SectionAddProposal />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Suspense fallback={<SectionHistorySkeleton />}>
          {/* CONTENIDO */}
          <SectionProposalHistory />
        </Suspense>
      </CustomTabPanel>
    </Box>
  )
}

export default DrawerDivider
