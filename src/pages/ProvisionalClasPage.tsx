import React from 'react'
import { Link } from 'react-router-dom'
import close from '../assets/close.svg'
import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'

export interface Props {
  positions: Position[]
}

export interface Position {
  id: number,
  name: string,
  score: number,
  position: number,
  image: string // ?
}
const positionArr: Position[] = [
  {
    id: 1,
    name: 'Pepito',
    score: 25,
    position: 2,
    image: 'avatar'
  },
  {
    id: 2,
    name: 'Pepito',
    score: 35,
    position: 2,
    image: 'avatar4'
  },
  {
    id: 3,
    name: 'Mengano',
    score: 45,
    position: 1,
    image: 'avatar2'
  },
  {
    id: 4,
    name: 'Sultano',
    score: 18,
    position: 4,
    image: 'avatar3'
  },
  {
    id: 5,
    name: 'Pepito2',
    score: 5,
    position: 5,
    image: 'avatar5'
  }
]

const ProvisionalClasPage: React.FC<Props> = ({ positions = positionArr }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to='/'>
          <img src={close} alt='close'/>
        </Link>
        <div className={styles.round}>
          <h3 className={styles.title}>Clasificacion temporal</h3>
          <p>Ronda 1/5</p>
        </div>
      </header>
      { positions.map(position => (
        <ClassificationCard
          key={position.id}
          name={position.name}
          score={position.score}
          position={position.position}
          image={position.image}
        />
      ))}
    </div>
  )
}

export default ProvisionalClasPage
