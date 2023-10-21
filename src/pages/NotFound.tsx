import Box from '@mui/material/Box'
import Img404 from '../../public/404.svg'

const NotFound = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexGrow={1}
      height={'90vh'}
    >
      <img
        src={Img404}
        alt='Marinero con el numero 404 detras'
        width={'90%'}
        style={{ maxWidth: '500px' }}
        loading='lazy'
      />
    </Box>
  )
}

export default NotFound
