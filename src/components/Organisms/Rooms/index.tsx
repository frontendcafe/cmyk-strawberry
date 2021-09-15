import React from 'react'
import Room from '../../molecules/Room'
import SkeletonRoom from '../../molecules/SkeletonRoom'
import { ReactComponent as EmptyStateIcon } from '../../../assets/empty-state.svg'
import { IRoom, RoomState } from '../../../types/room'

import styles from './Rooms.module.scss'

type Props = {
  rooms: IRoom[]
  showPrivate: boolean
}

const Rooms: React.FC<Props> = ({ rooms, showPrivate }) => {
  const filteredRooms = rooms.filter(
    room => Boolean(room.password) === showPrivate && room.state !== RoomState.ENDED
  )

  return (
    <section className={styles.container}>
      {
        filteredRooms.length > 0
          ? filteredRooms.map(room => <Room key={room.id} room={room}/>)
          : <EmptyStateIcon className={styles['empty-state']}/>
      }
      <SkeletonRoom/>
    </section>
  )
}

export default Rooms
