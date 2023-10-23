import { Suspense, lazy, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import LinearProgress from '@mui/material/LinearProgress'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import timelineOppositeContentClasses from '@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses'
import { History } from '../../types'

const CardHistory = lazy(() => import('./CardHistory'))

const SectionProposalHistory = () => {
  const [data, setData] = useState<History[]>([])

  // traer el array de reglas desde la API
  useEffect(() => {
    fetch('/history.json')
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
    <>
      {/* LISTA DE USUARIOS */}
      <Suspense fallback={<LinearProgress />}>
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
      </Suspense>

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
            <TimelineOppositeContent>
              <Suspense fallback={<LinearProgress />}>{item.time}</Suspense>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            {/* DERECHA */}
            <TimelineContent>
              <Suspense fallback={<LinearProgress />}>
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
    </>
  )
}

export default SectionProposalHistory
