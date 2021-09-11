import React from 'react'

import Layout from '../../components/templates/Layout'
import GameConfigForm from '../../components/organisms/GameConfigForm'
import { paths } from '../../routes'

import { FOOTER_BUTTONS, MOCK_GAME } from './constants'
import { useHistory } from 'react-router'
import { addRoom } from '../../firebase/services/room'

const GameConfig = () => {
  const data = MOCK_GAME
  const history = useHistory()

  const handleSubmit = () => {
    const roomId = addRoom(data)

    if (roomId) {
      history.push(paths.PREVIEW.replace(':id', roomId))
    }
  }

  return (
    <Layout
      title="Creación de partida"
      subTitle="Configuración de parámetros"
      closePath={paths.HOME}
      buttons={FOOTER_BUTTONS(handleSubmit)}
    >
      <GameConfigForm/>
    </Layout>
  )
}

export default GameConfig
