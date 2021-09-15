import React from 'react'
import Room from '../../molecules/Room'
import SkeletonRoom from '../../molecules/SkeletonRoom'
import { ReactComponent as EmptyStateIcon } from '../../../assets/empty-state.svg'
import { IRoom } from '../../../types/room'

import styles from './Rooms.module.scss'

type Props = {
  rooms: IRoom[]
  showPrivate: boolean
}

const Rooms: React.FC<Props> = ({ rooms, showPrivate }) => {
  const filteredRooms =
    showPrivate
      ? rooms.filter(room => room.password)
      : rooms.filter(room => !Object.prototype.hasOwnProperty.call(room, 'password'))

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
