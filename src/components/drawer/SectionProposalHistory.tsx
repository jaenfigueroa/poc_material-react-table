import { Suspense, lazy } from 'react'
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
import { HISTORY } from '../../data/history'

const CardHistory = lazy(() => import('./CardHistory'))

const SectionProposalHistory = () => {
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
        {HISTORY.map((item) => (
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
