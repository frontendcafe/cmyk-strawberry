import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import GameConfig from '../components/Organisms/GameConfig'
import { GAME_CONFIG_FIELDS } from '../components/Organisms/GameConfigForm/constants'
import { RoomContext } from '../contexts/RoomContextState'
import { iCategory } from '../hooks/useCategories/types'
import { useForm } from '../hooks/useForm'
import { paths } from '../routes'
import { IRoom } from '../types/room'
import { INITIAL_STATE_GAME } from './NewGame/constants'

const EditGame = () => {
  const [values, handleChange,, setValue, setValues] = useForm<IRoom>(INITIAL_STATE_GAME)
  const history = useHistory()
  const { idRoom } = useParams<{ idRoom: string }>()
  const { room, roomKey, setRoom, setRoomKey } = useContext(RoomContext)

  const handleChangeCategories = (categories: iCategory[]) =>
    setValue(GAME_CONFIG_FIELDS.CATEGORIES, categories)

  const handleSubmit = () => {
    if (values) {
      setRoom?.(values)

      history.push(paths.PREVIEW.replace(':idRoom', roomKey))
    }
  }

  useEffect(() => {
    if (idRoom) {
      setRoomKey(idRoom)
    }
  }, [])

  useEffect(() => {
    setValues(room ?? INITIAL_STATE_GAME)
  }, [room])

  return (
    <GameConfig
      values={values}
      handleChange={handleChange}
      setValue={setValue}
      categories={values.categories}
      setCategories={handleChangeCategories}
      handleSubmit={handleSubmit}
    />
  )
}

export default EditGame
