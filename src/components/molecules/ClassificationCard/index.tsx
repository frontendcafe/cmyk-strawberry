import React from 'react'
import styles from './ClassificationCard.module.scss'
import avatar from '../../atoms/Avatars/assets/avatar1.svg'
import avatar2 from '../../atoms/Avatars/assets/avatar2.svg'
import avatar3 from '../../atoms/Avatars/assets/avatar3.svg'
import avatar4 from '../../atoms/Avatars/assets/avatar4.svg'
import avatar5 from '../../atoms/Avatars/assets/avatar5.svg'

export interface Props {
    name: string,
    score: number,
    position: number,
    image: 'avatar' | 'avatar2' | 'avatar3' | 'avatar4' | 'avatar5'
  }

function ClassificationCard ({ name, score, position, image }: Props) {
  const imgAvatar = { avatar, avatar2, avatar3, avatar4, avatar5 }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={imgAvatar[image]} alt='avatar' className={styles.image}/>
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
