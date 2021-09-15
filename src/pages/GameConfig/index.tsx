import React from 'react'

import Layout from '../../components/templates/Layout'
import GameConfigForm from '../../components/organisms/GameConfigForm'
import { paths } from '../../routes'

import { FOOTER_BUTTONS, INITIAL_STATE_GAME } from './constants'
import { useHistory } from 'react-router'
import { addRoom } from '../../firebase/services/room'
import { useForm } from '../../hooks/useForm'
import { IRoom } from '../../types/room'

const GameConfig = () => {
  const [values, handleChange,, setValue] = useForm<IRoom>(INITIAL_STATE_GAME as any)
  const history = useHistory()

  const handleSubmit = () => {
    const roomId = addRoom(values)

    if (roomId) {
      history.push(paths.PREVIEW.replace(':id', roomId))
    }
  }

  return (
    <Layout
      title="Creación de partida"
      subTitle="Configuración de parámetros"
      onClose={() => history.push(paths.HOME)}
      buttons={FOOTER_BUTTONS(handleSubmit)}
    >
      <GameConfigForm values={values} handleChange={handleChange} setValue={setValue}/>
    </Layout>
  )
}

export default GameConfig
