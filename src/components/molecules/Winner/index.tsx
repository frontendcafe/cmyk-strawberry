import React from 'react'
import styles from './Winner.module.scss'
import avatar from '../../atoms/Avatars/assets/avatar1.svg'
import avatar2 from '../../atoms/Avatars/assets/avatar2.svg'
import avatar3 from '../../atoms/Avatars/assets/avatar3.svg'
import avatar4 from '../../atoms/Avatars/assets/avatar4.svg'
import avatar5 from '../../atoms/Avatars/assets/avatar5.svg'
import laurel from '../../../assets/laurel-medal.svg'

export interface Props {
    name: string,
    score: number,
    image: 'avatar' | 'avatar2' | 'avatar3' | 'avatar4' | 'avatar5'
  }

const Winner = ({ name, score, image }: Props) => {
  const imgAvatar = { avatar, avatar2, avatar3, avatar4, avatar5 }
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img src={imgAvatar[image]} alt='Ganador' className={styles.image}/>
        <img src={laurel}className={styles.laurel}/>
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <p className={styles.name}>{name}</p>
          <p>{score} Puntos</p>
        </div>
      </div>
    </div>
  )
}
export default Winner
