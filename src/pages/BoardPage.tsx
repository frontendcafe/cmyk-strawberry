import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../components/atoms/Button'
import CategoryInput from '../components/atoms/CategoryInput'
import { useForm } from '../hooks/useForm'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../contexts/RoomContextState'
import { PlayerContext } from '../contexts/PlayerContextState'
import { updateRoomPlayersAnswers } from '../firebase/services/room'
import Letter from '../components/atoms/Letter'
import Countdown from '../components/atoms/Countdown'

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

  const [showLetter, setShowLetter] = useState(true)
  const [showCoutdown, setShowCoutdown] = useState(false)

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  const handleSubmit = () => {
    // TODO: Falta mucha logica de integracion aun pero tiene la esencia
    const roundGame = {
      [room.roundInProgress]: {
        letter,
        playersAnswer: {
          [playerKey]: {
            ...formValues
          }
        }
      }
    }
    updateRoomPlayersAnswers(roomKey, { ...roundGame })
    // TODO: redirection...?
  }

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
          >
            <Button
              type='button'
              onClick={() => handleSubmit()}
              theme='primary'
              size='large'
            >
        ¡BASTA!
            </Button>

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
