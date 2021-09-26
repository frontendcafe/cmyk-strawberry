import React from 'react'
import Room from '../../molecules/Room'
import { ReactComponent as EmptyStateIcon } from '../../../assets/empty-state.svg'
import { IRoom } from '../../../types/room'

import styles from './Rooms.module.scss'
import { RoomState } from '../../../hooks/useRoomState/types'

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
    </section>
  )
}

export default Rooms
