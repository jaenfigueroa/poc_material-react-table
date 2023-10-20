import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { LinearProgress } from '@mui/material'
import SectionDetails from './SectionDetails'

const Curacion = React.lazy(() => import('./SectionCuracion'))
const History = React.lazy(() => import('./SectionHistory'))

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function DrawerDivider() {
  const theme = useTheme()
  const [value, setValue] = React.useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <Box sx={{ width: '600px' }}>
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
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* CONTENIDO */}
          <React.Suspense fallback={<LinearProgress />}>
            <SectionDetails />
          </React.Suspense>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* CONTENIDO */}
          <React.Suspense fallback={<LinearProgress />}>
            <Curacion />
          </React.Suspense>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          {/* CONTENIDO */}
          <React.Suspense fallback={<LinearProgress />}>
            <History />
          </React.Suspense>
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}