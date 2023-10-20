import { Button, Paper, TextField, Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
// import Textarea from '@mui/joy/Textarea'

const Curacion = () => {
  return (
    <>
      <Paper sx={{ p: 2 }}>
        1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla sed doloribus nisi natus
        maiores dicta atque voluptatem consequatur delectus sequi adipisci, illum esse molestiae nam
        minima possimus in, error sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Voluptate, corrupti officiis eos, fugit libero minima exercitationem optio quidem
        soluta cupiditate veniam rem id nam, beatae aperiam tenetur vero excepturi! Perspiciatis
        vitae nam quos libero, id repudiandae ducimus minima ad aspernatur dolore consequuntur
        dolores fuga asperiores nostrum optio consequatur iure provident sit? Modi, fuga
        necessitatibus a unde mollitia nulla magnam beatae praesentium reiciendis iusto dolor, iste
        cum facilis inventore, itaque cumque. Iste quisquam magni nesciunt ad asperiores voluptatem
      </Paper>
      <Typography variant='body1' pt={4} pb={1} color={'primary.light'}>
        {/* ACTUALIZAR ESTADO DE LA REGLA */}
        CREAR NUEVA PROPUESTA
      </Typography>

      <Paper sx={{ p: 2 }}>
        <FormControl>
          {/* <FormLabel id='demo-radio-buttons-group-label'>Estado para la regla</FormLabel> */}
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel value='activar' control={<Radio />} label='Activar regla' />
            <FormControlLabel value='desactivar' control={<Radio />} label='Desactivar regla' />
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

          {/* TEXTarea */}
          {/* <Textarea color='primary' disabled={false} minRows={2} size='md' variant='outlined' /> */}
        </FormControl>
      </Paper>
    </>
  )
}

export default Curacion
