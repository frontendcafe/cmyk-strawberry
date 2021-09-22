import React from 'react'
import { ReactComponent as UserIcon } from '../../../assets/users.svg'
import { ReactComponent as LockIcon } from '../../../assets/lock.svg'
import { IRoom } from '../../../types/room'
import { useHistory } from 'react-router'
import { paths } from '../../../routes'

import styles from './Room.module.scss'

interface Props {
  room: IRoom
}

const Room: React.FC<Props> = ({ room }) => {
  const history = useHistory()

  return (
    <section className={styles.container} onClick={() => history.push(paths.PREVIEW.replace(':id', room.id ?? '0'))}>
      <div className={styles['label-wrap']}>
        <span className={styles.title}>{room.name ?? 'Sala XX'}</span>
        {room.password && <LockIcon className={styles['lock-icon']}/>}
      </div>
      <div className={styles['user-icon']}>
        <UserIcon/>
        <span className={styles['user-label']}>{room.players?.length ?? 0}</span>
      </div>
      <div className={styles.rounds}>
        <span>{room.rounds}/{room.rounds}</span>
        <span className={styles['round-label']}>Rondas</span>
      </div>
    </section>
  )
}

export default Room
