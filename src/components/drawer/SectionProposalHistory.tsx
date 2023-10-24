import { Suspense, lazy, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent/'
import { History } from '../../types'
import { CardHistorySkeleton } from '../../ui/skeletons/CardSkeleton'

const CardHistory = lazy(() => import('./CardHistory'))

const SectionProposalHistory = () => {
  const [data, setData] = useState<History[]>([])

  // traer el array de reglas desde la API
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/jaenfigueroa/cdn-example/main/new-rules-admin/history.json',
    )
      .then((response) => response.json())
      .then((data) => {
        // Asumiendo que los datos tienen una estructura similar a la interfaz History
        setData(data.history as History[])
      })
      .catch((error) => {
        console.error('Error al obtener los datos', error)
      })
  }, [])

  return (
    <Suspense
      fallback={
        <Stack spacing={2}>
          <Skeleton animation='wave' height={100} />
          <Skeleton animation='wave' height={500} />
        </Stack>
      }
    >
      {/* LISTA DE USUARIOS */}
      <AvatarGroup max={10}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>

      {/* LINEA DE TIEMPO */}
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {data.map((item) => (
          <TimelineItem key={crypto.randomUUID()}>
            {/* IZQUIERDA */}
            <TimelineOppositeContent>{item.time}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            {/* DERECHA */}
            <TimelineContent>
              <Suspense fallback={<CardHistorySkeleton />}>
                <CardHistory
                  user={item.user}
                  action={item.action}
                  reason={item.reason}
                  time={item.time}
                />
              </Suspense>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Suspense>
  )
}

export default SectionProposalHistory
