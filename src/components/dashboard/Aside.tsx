import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import DrawerMain from '../drawer'

const Aside = () => {
  const [language, setLanguage] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [severity, setSeverity] = useState<string>('')
  const [isActive, setIsActive] = useState<string>('')

  return (
    <Box component={'section'}>
      <Stack spacing={1.5}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Lenguage
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Lenguage'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size='small'
          >
            <MenuItem value={'HTML'}>HTML</MenuItem>
            <MenuItem value={'CSS'}>CSS</MenuItem>
            <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Tipo
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Tipo'
            value={type}
            onChange={(e) => setType(e.target.value)}
            size='small'
          >
            <MenuItem value='One'>One</MenuItem>
            <MenuItem value='Two'>Two</MenuItem>
            <MenuItem value='Three'>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Severidad
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Severidad'
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            size='small'
          >
            <MenuItem value='Bajo'>Bajo</MenuItem>
            <MenuItem value='Medio'>Medio</MenuItem>
            <MenuItem value='Alto'>Alto</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Estado actual
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Estado actual'
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            size='small'
          >
            <MenuItem value={'Activado'}>Activado</MenuItem>
            <MenuItem value={'Desactivado'}>Desactivado</MenuItem>
          </Select>

          {/* MOSTRAR MODAL DE MAS INFO */}
          <DrawerMain />
        </FormControl>
      </Stack>
    </Box>
  )
}

export default Aside
