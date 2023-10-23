import Box from '@mui/material/Box'
import Img404 from '../../public/404.svg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      flexGrow={1}
      height={'90vh'}
      gap={4}
    >
      <img
        src={Img404}
        alt='Marinero con el numero 404 detras'
        width={'90%'}
        style={{ maxWidth: '350px' }}
        loading='lazy'
      />
      <Link to='/login'>
        <Button variant='contained'>Volver al Inicio</Button>
      </Link>
    </Box>
  )
}

export default NotFound
