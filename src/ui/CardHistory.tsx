import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

interface Props {
  user: string
  action: string
  reason: string
}

const CardHistory = (props: Props) => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  return (
    <Paper sx={{ p: 2 }}>
      <Avatar />
      <Typography variant='subtitle1' fontWeight={'bold'}>
        {props.user}
      </Typography>
      <Chip
        variant={isDarkMode ? 'outlined' : 'filled'}
        label={props.action}
        color={props.action === 'Activar regla' ? 'success' : 'error'}
        style={{ margin: '10px 0' }}
      />
      <Typography>{props.reason}</Typography>
    </Paper>
  )
}

export default CardHistory
