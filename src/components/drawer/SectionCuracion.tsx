import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

const SectionCuracion = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <FormControl>
        <RadioGroup name='isActive'>
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
  )
}

export default SectionCuracion
