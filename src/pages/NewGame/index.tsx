import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GAME_CONFIG_FIELDS } from '../../components/Organisms/GameConfigForm/constants'
import GameConfigWrapper from '../../components/Organisms/GameConfigWrapper'
import { PlayerContext } from '../../contexts/PlayerContextState'
import { addRoom } from '../../firebase/services/room'
import { iCategory } from '../../hooks/useCategories/types'
import { useForm } from '../../hooks/useForm'
import { paths } from '../../routes'
import { IRoom } from '../../types/room'
import { FOOTER_BUTTONS, INITIAL_STATE_GAME } from './constants'

const NewGame = () => {
  const [values, handleChange,, setValue] = useForm<IRoom>(INITIAL_STATE_GAME)
  const history = useHistory()
  const { player } = useContext(PlayerContext)

  const handleChangeCategories = (categories: iCategory[]) =>
    setValue(GAME_CONFIG_FIELDS.CATEGORIES, categories)

  const handleSubmit = () => {
    values.players = [player]

    const roomId = addRoom(values)

    if (roomId) {
      history.push(paths.PREVIEW.replace(':idRoom', roomId))
    }
  }

  return (
    <GameConfigWrapper
      layoutProps={{
        title: 'Creación de partida',
        subTitle: 'Configuración de parámetros',
        onClose: () => history.push(paths.HOME),
        buttons: FOOTER_BUTTONS(handleSubmit)
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

export default NewGame
