import React from 'react'
import { paths } from '../routes'
import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Button } from '../components/atoms/Button'
import Header from '../components/molecules/Header'
import Winner from '../components/molecules/Winner'
import { useHistory } from 'react-router-dom'

export interface Props {
  positions: Position[]
}

export interface Position {
  id: number,
  name: string,
  score: number,
  image: string // ?
}
const positionArr: Position[] = [
  {
    id: 1,
    name: 'Pepito',
    score: 25,
    image: 'avatar'
  },
  {
    id: 2,
    name: 'Pepito',
    score: 35,
    image: 'avatar4'
  },
  {
    id: 3,
    name: 'Mengano',
    score: 45,
    image: 'avatar2'
  },
  {
    id: 4,
    name: 'Sultano',
    score: 18,
    image: 'avatar3'
  },
  {
    id: 5,
    name: 'Pepito2',
    score: 5,
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

const winner = newPositionJSON[0]
console.log(winner)

const loser = newPositionJSON.filter((_item, index) => index !== 0)
console.log(loser)

const ProvisionalClasPage: React.FC = () => {
  const history = useHistory()
  // si la partida esta terminando...
  const isEnd = true
  return (
    <>
      { isEnd
        ? <div className={styles.containerwin}>
          <Header
            title='Clasificación Final'
            onClose={() => history.push(paths.BOARD)}
          />
          <Winner
            image={winner.image}
            name={winner.name}
            score={winner.score}
          />
          { loser.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
            <ClassificationCard
              key={position.id}
              name={position.name}
              score={position.score}
              position={index + 2}
              image={position.image}
            />
          ))}
          <Button
            type='button'
            onClick={() => history.push(paths.BOARD)}
            theme='primary'
            size='large'
          >
            REINICIAR PARTIDA
          </Button>
        </div>
        : <div className={styles.container}>
          <Header
            title='Clasificación temporal'
            onClose={() => history.push(paths.BOARD)}
            subTitle='Ronda 1/5'
          />
          { newPositionJSON.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
            <ClassificationCard
              key={position.id}
              name={position.name}
              score={position.score}
              position={index + 1}
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
      }
    </>
  )
}

export default ProvisionalClasPage
