import React from 'react'
import styles from './Winner.module.scss'
import laurel from '../../../assets/laurel-medal.svg'
import Avatar from '../../atoms/Avatars'

export interface Props {
    name: string;
    score: number;
    avatarIndex: number;
    isCurrentPlayer?: boolean;
  }

const Winner = ({ name, score, avatarIndex, isCurrentPlayer }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Avatar index={avatarIndex} className={styles.image}/>
        <img src={laurel}className={styles.laurel}/>
      </div>
      <div className={`${styles.info} ${isCurrentPlayer ? styles.selected : ''}`}>
        <div className={styles.description}>
          <p className={styles.name}>{name}</p>
          <p>{score} Puntos</p>
        </div>
      </div>
    </div>
  )
}
export default Winner
