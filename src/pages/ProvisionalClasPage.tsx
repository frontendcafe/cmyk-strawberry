import React, { useContext, useEffect } from 'react'
import { paths } from '../routes'
import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Button } from '../components/atoms/Button'
import Header from '../components/molecules/Header'
import Winner from '../components/molecules/Winner'
import { useHistory, useParams } from 'react-router-dom'
import { RoomContext } from '../contexts/RoomContextState'
import useRoomState from '../hooks/useRoomState'

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

function sortJSON<DataType> (data: DataType[], key:string, orden:'asc' | 'desc') {
  return data.sort(function (a:DataType, b:DataType) {
    if (key in a && key in b) {
      const x = (a as any)[key]
      const y = (b as any)[key]

      if (orden === 'desc') {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0))
      } else {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      }
    }

    return -1
  })
}

const newPositionJSON = sortJSON(positionArr, 'score', 'desc')

const winner = newPositionJSON[0]

const loser = newPositionJSON.filter((_item, index) => index !== 0)

const ProvisionalClasPage: React.FC = () => {
  const history = useHistory()
  const { isLastRound, setRoomKey } = useContext(RoomContext)
  const [next] = useRoomState({})
  const { idRoom } = useParams<{ idRoom: string }>()

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  return (
    <>
      { isLastRound
        ? <div className={styles.containerwin}>
          <Header
            title='Clasificación Final'
            onClose={() => history.push(paths.BOARD)}
          />
          <Winner
            image={(winner.image as any)}
            name={winner.name}
            score={winner.score}
          />
          { loser.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
            <ClassificationCard
              key={position.id}
              name={position.name}
              score={position.score}
              position={index + 2}
              image={(position.image as any)}
            />
          ))}
          <Button
            type='button'
            onClick={next}
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
              image={(position.image as any)}
            />
          ))}
          <Button
            type='button'
            onClick={next}
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
