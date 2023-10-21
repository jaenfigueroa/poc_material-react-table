import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import useForm from '../../hook/useForm'

const initialValues = {
  optionActive: '',
  reason: '',
}

const SectionAddProposal = () => {
  const { values, handleChange } = useForm(initialValues)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data submitted:', values)
  }

  return (
    <Paper sx={{ p: 2 }}>
      <FormControl
        component={'form'}
        sx={{ display: 'flex', gap: 2 }}
        onSubmit={handleSubmit}
      >
        <RadioGroup
          value={values.optionActive}
          name='optionActive'
          onChange={handleChange}
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

        <TextField
          multiline
          fullWidth
          variant='outlined'
          label='Sustento'
          placeholder='Escribe aquí tu sustento bien detallado de porque solicitas activar/desactivar esta regla.'
          name='reason'
          value={values.reason}
          onChange={handleChange}
        />

        <Button type='submit' variant='contained' sx={{ p: 1.5, mt: 2 }}>
          Guardar propuesta localmente
        </Button>
      </FormControl>
    </Paper>
  )
}

export default SectionAddProposal
