import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import { HISTORY } from '../../data/history'
import { Suspense, lazy } from 'react'
import { LinearProgress } from '@mui/material'

const CardHistory = lazy(() => import('./CardHistory'))

const SectionHistory = () => {
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
        {HISTORY.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Suspense fallback={<LinearProgress />}>{item.time}</Suspense>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Suspense fallback={<LinearProgress />}>
                <CardHistory
                  user={item.user}
                  action={item.action}
                  sustento={item.sustento}
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

export default SectionHistory
