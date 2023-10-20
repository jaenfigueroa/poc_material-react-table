import { Button, Paper, TextField, Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

const SectionCuracion = () => {
  return (
    <>
      {/* ACTUALIZAR ESTADO DE LA REGLA */}
      <Typography variant='body1' pt={4} pb={1} color={'primary.light'}>
        CREAR NUEVA PROPUESTA
      </Typography>

      <Paper sx={{ p: 2 }}>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='activar'
              control={<Radio />}
              label='Activar regla'
            />
            <FormControlLabel
              value='desactivar'
              control={<Radio />}
              label='Desactivar regla'
            />
          </RadioGroup>

          {/* SUSTENTO */}
          <TextField
            hiddenLabel
            id='filled-hidden-label-normal'
            variant='outlined'
            label='Sustento'
            sx={{ mt: 3 }}
          />

          <Button variant='contained' sx={{ p: 1.5, mt: 2 }}>
            Guardar
          </Button>
        </FormControl>
      </Paper>
    </>
  )
}

export default SectionCuracion
