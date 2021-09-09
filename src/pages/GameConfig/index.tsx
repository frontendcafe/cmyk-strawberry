import React from 'react'

import Layout from '../../components/templates/Layout'
import GameConfigForm from '../../components/organisms/GameConfigForm'
import { paths } from '../../routes'

import { FOOTER_BUTTONS } from './constants'

const GameConfig = () => {
  return (
    <Layout
      title="Creación de partida"
      subTitle="Configuración de parámetros"
      closePath={paths.HOME}
      buttons={FOOTER_BUTTONS}
    >
      <GameConfigForm/>
    </Layout>
  )
}

export default GameConfig
