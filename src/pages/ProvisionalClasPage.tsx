import React from 'react'
import { paths } from '../routes'
import close from '../assets/close.svg'
import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Button } from '../components/atoms/Button'
import { useHistory, Link } from 'react-router-dom'

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
function sortJSON (data, key:string, orden:string) {
  return data.sort(function (a:number, b:number) {
    const x = a[key]
    const y = b[key]

    if (orden === 'asc') {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    }

    if (orden === 'desc') {
      return ((x > y) ? -1 : ((x < y) ? 1 : 0))
    }
    return data
  })
}

const newPositionJSON = sortJSON(positionArr, 'score', 'desc')
console.log(JSON.stringify(newPositionJSON))

const ProvisionalClasPage: React.FC<Props> = ({ positions = newPositionJSON }) => {
  const history = useHistory()

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
      <Button
        type='button'
        onClick={() => history.push(paths.BOARD)}
        theme='primary'
        size='large'
      >
        SIGUIENTE RONDA
      </Button>
    </div>
  )
}

export default ProvisionalClasPage
