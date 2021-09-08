import React from 'react'
import { ReactComponent as UserIcon } from '../../../assets/users.svg'
import { ReactComponent as LockIcon } from '../../../assets/lock.svg'

import styles from './Room.module.scss'

interface IRoom {
  label: string
  players: number
  rounds: number
  totalRounds: number
  private: boolean
}

interface Props {
  room: IRoom
}

const Room: React.FC<Props> = ({ room }) => {
  return (
    <section className={styles.container}>
      <div className={styles['label-wrap']}>
        <span className={styles.title}>{room.label}</span>
        {room.private && <LockIcon className={styles['lock-icon']}/>}
      </div>
      <div className={styles['user-icon']}>
        <UserIcon/>
        <span className={styles['user-label']}>{room.players}</span>
      </div>
      <div className={styles.rounds}>
        <span>{room.rounds}/{room.totalRounds}</span>
        <span className={styles['round-label']}>Rondas</span>
      </div>
    </section>
  )
}

export default Room
