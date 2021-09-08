import React from 'react'
import Room from '../../molecules/Room'
import SkeletonRoom from '../../molecules/SkeletonRoom'

import styles from './Rooms.module.scss'

type Props = {
  rooms: {label: string, rounds: number, totalRounds: number, players: number, private: boolean}[]
  showPrivate: boolean
}

const Rooms: React.FC<Props> = ({ rooms, showPrivate }) => {
  return (
    <section className={styles.container}>
      {rooms.filter(room => room?.private === showPrivate).map((room, idx) => {
        return <Room key={idx} room={room}/>
      })}
      <SkeletonRoom/>
      <SkeletonRoom/>
      <SkeletonRoom/>
      <SkeletonRoom/>
    </section>
  )
}

export default Rooms
