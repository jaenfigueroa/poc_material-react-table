import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export const AsideSkeleton = () => (
  <Stack spacing={2}>
    <Skeleton animation='wave' variant='rounded' height={50} />
    <Skeleton animation='wave' variant='rounded' height={50} />
    <Skeleton animation='wave' variant='rounded' height={50} />
    <Skeleton animation='wave' variant='rounded' height={50} />
  </Stack>
)
