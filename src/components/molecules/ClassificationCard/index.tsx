import React from 'react'
import Avatar from '../../atoms/Avatars'
import styles from './ClassificationCard.module.scss'

export interface Props {
    name: string,
    score: number,
    position: number,
    avatarIndex: number
  }

function ClassificationCard ({ name, score, position, avatarIndex }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Avatar index={avatarIndex} className={styles.image}/>
        <div className={styles.description}>
          <p className={styles.name}>{name}</p>
          <p>{score} Puntos</p>
        </div>
      </div>
      <h4 className={styles.position}>{position}</h4>
    </div>
  )
}

export default ClassificationCard
