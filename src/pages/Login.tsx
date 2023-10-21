import { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setIsLogged } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={1}
      height={'calc(100vh - 64px)'}
    >
      <Avatar style={{ width: 150, height: 150 }} />
      <TextField id='outlined-basic' label='Usuario' variant='outlined' />
      <TextField id='filled-basic' label='Contraseña' variant='outlined' />
      <Button
        variant='contained'
        style={{ padding: 15, width: 225 }}
        onClick={() => {
          setIsLogged(true)
          navigate('/admin')
        }}
      >
        Ingresar
      </Button>
    </Box>
  )
}

export default Login
