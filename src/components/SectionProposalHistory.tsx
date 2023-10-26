import { Suspense, lazy } from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Skeleton from '@mui/material/Skeleton'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent/'
import { Proposal } from '../types'
import { CardHistorySkeleton } from '../ui/skeletons/CardSkeleton'
import { useQuery, UseQueryResult } from 'react-query'

const CardHistory = lazy(() => import('../ui/CardHistory'))

const fetchData = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/jaenfigueroa/cdn-example/main/new-rules-admin/history.json',
  )
  const data = await response.json()
  return data.history
}

const SectionProposalHistory = () => {
  const { data }: UseQueryResult<Proposal[]> = useQuery('proposals', fetchData)

  return (
    <>
      {/* LISTA DE USUARIOS */}
      <Suspense fallback={<Skeleton animation='wave' height={100} />}>
        <AvatarGroup max={10}>
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
        {data?.map((item) => (
          <TimelineItem key={crypto.randomUUID()}>
            {/* IZQUIERDA */}
            <TimelineOppositeContent>{item.date}</TimelineOppositeContent>

            {/* SEPARADOR */}
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            {/* DERECHA */}
            <TimelineContent>
              <Suspense fallback={<CardHistorySkeleton />}>
                <CardHistory {...item} />
              </Suspense>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}

export default SectionProposalHistory
