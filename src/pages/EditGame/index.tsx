import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { GAME_CONFIG_FIELDS } from '../../components/Organisms/GameConfigForm/constants'
import { RoomContext } from '../../contexts/RoomContextState'
import { iCategory } from '../../hooks/useCategories/types'
import { useForm } from '../../hooks/useForm'
import { paths } from '../../routes'
import { IRoom } from '../../types/room'
import { INITIAL_STATE_GAME } from '../NewGame/constants'
import { FOOTER_BUTTONS } from './constants'
import GameConfigWrapper from '../../components/Organisms/GameConfigWrapper'

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
    <GameConfigWrapper
      layoutProps={{
        title: 'Edición de partida',
        subTitle: 'Configuración de parámetros',
        onClose: () => history.push(paths.PREVIEW.replace(':idRoom', roomKey)),
        buttons: FOOTER_BUTTONS(handleSubmit),
        loading: !room
      }}
      gameConfigProps={{
        values,
        handleChange,
        setValue
      }}
      categories= {values.categories}
      setCategories={ handleChangeCategories}
    />
  )
}

export default EditGame
