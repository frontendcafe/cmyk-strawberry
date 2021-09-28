import React, { useContext, useEffect } from 'react'
// import styles from './styles/ProvisionalClasPage.module.scss'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Props as ButtonProps } from '../components/atoms/Button'
import Winner from '../components/molecules/Winner'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../contexts/RoomContextState'
import useRoomState from '../hooks/useRoomState'
import Layout from '../components/templates/Layout'

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

const LABELS = (isEnd: boolean, roundInProgress: number, rounds: number) => isEnd
  ? { title: 'Clasificación Final' }
  : { title: 'Clasificación temporal', subTitle: `Ronda ${roundInProgress}/${rounds}` }

const BUTTONS = (isEnd: boolean, next: () => void): ButtonProps[] => isEnd
  ? [{
    key: 'END_GAME',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: next,
    children: 'VOLVER AL INICIO'
  }]
  : [{
    key: 'NEXT_ROUND',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: next,
    children: 'SIGUIENTE RONDA'
  }]

const ProvisionalClasPage: React.FC = () => {
  const { isLastRound, setRoomKey, room } = useContext(RoomContext)
  const [next] = useRoomState({})
  const { idRoom } = useParams<{ idRoom: string }>()

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  return (
    <Layout
      loading={!room}
      onClose={next}
      buttons={BUTTONS(isLastRound, next)}
      {...LABELS(isLastRound, room?.roundInProgress, room?.rounds)}
    >
      {
        isLastRound
          ? (
            <>
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
            </>
          )
          : (
            newPositionJSON.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
              <ClassificationCard
                key={position.id}
                name={position.name}
                score={position.score}
                position={index + 1}
                image={(position.image as any)}
              />
            ))
          )
      }
    </Layout>
  )
}

export default ProvisionalClasPage
