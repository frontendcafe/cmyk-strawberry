import React from 'react'
import { Link } from 'react-router-dom'
import close from '../assets/close.svg'
import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Button } from '../components/atoms/Button'

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
    position: 3,
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

// const mapScore = positionArr.map((position) => position.score)
// console.log(mapScore)
function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
    let x = a[key],
    y = b[key]

    if (orden === 'asc') {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    }

    if (orden === 'desc') {
      return ((x > y) ? -1 : ((x < y) ? 1 : 0))
    }
  })
}

let newPositionJSON = sortJSON(positionArr, 'score', 'desc')
console.log(JSON.stringify(newPositionJSON))

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
      { newPositionJSON.map(position => (
        <ClassificationCard
          key={position.id}
          name={position.name}
          score={position.score}
          position={position.position}
          image={position.image}
        />
      ))}
      <Button
        type='button'
        onClick={() => console.log('vuelve al juego')}
        theme='primary'
        size='large'
      >
        SIGUIENTE RONDA
      </Button>
    </div>
  )
}

export default ProvisionalClasPage
