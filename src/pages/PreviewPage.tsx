import React from 'react'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { Props as ButtonProps } from '../components/atoms/Button'
import PlayersList from '../components/molecules/PlayersList'
import PreviewInfoRoom from '../components/molecules/PreviewInfoRoom'
import PasswordRoom from '../components/molecules/PasswordRoom'
import { ReactComponent as CopyIcon } from '../../src/assets/copy2.svg'

export const FOOTER_BUTTONS: ButtonProps[] = [
  {
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: 'UNIRSE'
  }
]

export const FOOTER_BUTTONS_HOST: ButtonProps[] = [
  {
    type: 'button',
    theme: 'tertiary',
    size: 'large',
    onClick: () => console.log('Comenzar partida'),
    children: <><CopyIcon/>INVITAR AMIGOS</>
  },
  {
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('Comenzar partida'),
    children: 'COMENZAR PARTIDA'
  }
]

const playersMock = [
  {
    id: '1',
    name: 'Juan',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  },
  {
    id: '2',
    name: 'Pedro',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  },
  {
    id: '3',
    name: 'Andres',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  },
  {
    id: '4',
    name: 'Camilo',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  },
  {
    id: '5',
    name: 'Sergio',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  },
  {
    id: '6',
    name: 'Alex',
    urlImage: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
  }
]

const categoriesMock = [
  {
    id: '1',
    name: 'Comidas'
  },
  {
    id: '2',
    name: 'Países'
  },
  {
    id: '3',
    name: 'Frutas/Verduras'
  },
  {
    id: '4',
    name: 'Marcas'
  },
  {
    id: '5',
    name: 'Cosas'
  }
]

const roomMock = {
  id: '1',
  name: 'Sala 1',
  rounds: 10,
  seconds: 70,
  categories: categoriesMock,
  userHost: '6'
}

const PreviewPage = ({ players = playersMock, room = roomMock, isPrivate = true }) => {
  // TODO Obtener el id del usuario logueado
  const userId = '6'

  return (
    <Layout
      title={ isPrivate ? room.name + ' 🔒' : room.name }
      subTitle=""
      closePath={paths.HOME}
      buttons={ room.userHost === userId ? FOOTER_BUTTONS_HOST : FOOTER_BUTTONS }
    >
      <PlayersList players={players}/>

      <PreviewInfoRoom room={room}/>

      {
        isPrivate && <PasswordRoom/>
      }

    </Layout>
  )
}

export default PreviewPage
