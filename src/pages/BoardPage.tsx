import React, { useContext, useEffect } from 'react'
import { Button } from '../components/atoms/Button'
import CategoryInput from '../components/atoms/CategoryInput'
import { useForm } from '../hooks/useForm'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../contexts/RoomContextState'
import { PlayerContext } from '../contexts/PlayerContextState'

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

  const { room, setRoomKey } = useContext(RoomContext)
  const { player } = useContext(PlayerContext)
  const history = useHistory()
  const { idRoom } = useParams<{ idRoom: string }>()

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  const handleSubmit = () => {
    // TODO: Set the state of the room to ... ?
    console.log({ ...formValues, _player: player }) // add player to formValues to allow validation
  }

  return (
    <Layout
      title=""
      subTitle=""
      onClose={() => history.push(paths.HOME)}
      letter="M" // TODO: Get current letter
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

export default BoardPage
