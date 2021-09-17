import React, { useContext } from 'react'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { Props as ButtonProps } from '../components/atoms/Button'
import PlayersList from '../components/molecules/PlayersList'
import PreviewInfoRoom from '../components/molecules/PreviewInfoRoom'
import PasswordRoom from '../components/molecules/PasswordRoom'
import { ReactComponent as CopyIcon } from '../../src/assets/copy2.svg'
import { useHistory } from 'react-router-dom'
import { Modal } from '../components/atoms/Modal'
import { RoomContext } from '../contexts/RoomContextState'
import { PlayerContext } from '../contexts/PlayerContextState'

const PreviewPage = () => {
  const history = useHistory()
  const { room, addPlayerToRoom } = useContext(RoomContext)
  const { player } = useContext(PlayerContext)

  // TODO Obtener el id del usuario logueado
  const userId = '222'

  const isPrivate = room?.password !== undefined

  const userHost = room?.players.find(player => player.host)

  const getTextModal = () => {
    if (userHost?.id === userId) {
      return 'Volveras al inicio del juego'
    } else {
      return `Volveras a las salas ${isPrivate ? 'privadas' : 'públicas'}`
    }
  }

  const showModal = () => {
    Modal.fire({
      title: '¿Estas seguro que quieres salir de la sala?',
      text: getTextModal(),
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        history.push(paths.HOME)
      } else if (result.isDismissed) {
        console.log('Cancelado')
      }
    })
  }

  const FOOTER_BUTTONS: ButtonProps[] = [
    {
      key: 'UNIRSE',
      type: 'submit',
      theme: 'primary',
      size: 'large',
      onClick: () => addPlayerToRoom(player),
      children: 'UNIRSE'
    }
  ]

  const FOOTER_BUTTONS_HOST: ButtonProps[] = [
    {
      key: 'INVITAR AMIGOS',
      type: 'button',
      theme: 'tertiary',
      size: 'large',
      onClick: () => console.log('Comenzar partida'),
      children: <><CopyIcon/>INVITAR AMIGOS</>
    },
    {
      key: 'COMENZAR PARTIDA',
      type: 'submit',
      theme: 'primary',
      size: 'large',
      onClick: () => console.log('Comenzar partida'),
      children: 'COMENZAR PARTIDA'
    }
  ]

  return (
    <Layout
      title={ isPrivate ? room.name + ' 🔒' : room?.name || '' }
      subTitle=""
      onClose={showModal}
      buttons={ userHost?.id === userId ? FOOTER_BUTTONS_HOST : FOOTER_BUTTONS }
    >
      <PlayersList players={room?.players}/>

      <PreviewInfoRoom room={room}/>

      {
        isPrivate && <PasswordRoom/>
      }

    </Layout>
  )
}

export default PreviewPage
