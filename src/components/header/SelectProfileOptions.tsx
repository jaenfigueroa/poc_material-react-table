import { useContext } from 'react'
import SelectOptions from '../../ui/SelectOptions'
import Avatar from '@mui/material/Avatar'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const ProfileSelectOptions = () => {
  const { setIsLogged } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <SelectOptions
      icon={<Avatar sx={{ width: 30, height: 30 }} />}
      items={[
        {
          icon: <LogoutIcon />,
          text: 'Cerrar sesión',
          onClick: () => {
            setIsLogged(false)
            navigate('login')
          },
        },
      ]}
    />
  )
}

export default ProfileSelectOptions
