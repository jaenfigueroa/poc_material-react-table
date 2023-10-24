import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export const TableSkeleton = () => (
  <Stack spacing={2}>
    <Skeleton animation='wave' variant='rounded' height={100} />
    <Skeleton animation='wave' variant='rounded' height={400} />
    <Skeleton animation='wave' variant='rounded' height={100} />
  </Stack>
)
