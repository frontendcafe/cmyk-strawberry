import React from 'react'
import Layout from '../../components/templates/Layout'
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
      :D
    </Layout>
  )
}

export default GameConfig
