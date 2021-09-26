import React, { useContext, useEffect, useState } from 'react'
import CategoryInput from '../components/atoms/CategoryInput'
import { useForm } from '../hooks/useForm'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../contexts/RoomContextState'
import { PlayerContext } from '../contexts/PlayerContextState'
import Letter from '../components/atoms/Letter'
import Countdown from '../components/atoms/Countdown'
import useRoomState from '../hooks/useRoomState'
import { addRoundGame } from '../firebase/services/roundsGame'

export interface Props {
  categories: Category[]
}

export interface Category {
  id: number,
  title: string,
  value: string
}

const BoardPage: React.FC<Props> = () => {
  const [formValues, handleInputChange] = useForm<any>({})
  const { idRoom } = useParams<{ idRoom: string }>()
  const { room, roomKey, setRoomKey, currentLetter } = useContext(RoomContext)
  const { playerKey } = useContext(PlayerContext)
  const history = useHistory()
  const letter = currentLetter()

  const stopRound = () => {
    const roundGame = {
      roomKey,
      round: room.roundInProgress,
      playerKey,
      values: formValues
    }

    addRoundGame(roundGame)
  }

  const [next] = useRoomState({ nextSuscribers: [stopRound] })

  const [showLetter, setShowLetter] = useState(true)
  const [showCoutdown, setShowCoutdown] = useState(false)

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  return (
    <>
      { showLetter && room &&
        (<Letter room={room} setShowLetter={setShowLetter} setShowCoutdown={setShowCoutdown}/>)
      }
      { showCoutdown && room &&
        (<Countdown duration={5} handleEnd={ () => setShowCoutdown(false)}/>)
      }
      {
        !showLetter && !showCoutdown && room && (
          <Layout
            title=""
            subTitle=""
            onClose={() => history.push(paths.HOME)}
            letter={letter}
            boardStyle
            handleSubmit={next}
          >
            { room?.categories?.map(category => (
              <CategoryInput
                key={category.id}
                title={category.name}
                value={formValues[category.name] || ''}
                handleInputChange={handleInputChange}
              />
            ))
            }
          </Layout>
        )
      }
    </>
  )
}

export default BoardPage
