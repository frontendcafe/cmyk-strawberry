import React, { useContext, useEffect, useMemo, useRef } from 'react'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { Props as ButtonProps } from '../components/atoms/Button'
import PlayersList from '../components/molecules/PlayersList'
import PreviewInfoRoom from '../components/molecules/PreviewInfoRoom'
import PasswordRoom from '../components/molecules/PasswordRoom'
import { ReactComponent as CopyIcon } from '../../src/assets/copy2.svg'
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from '../components/atoms/Modal'
import { RoomContext } from '../contexts/RoomContextState'
import { PlayerContext } from '../contexts/PlayerContextState'
import useRoomState from '../hooks/useRoomState'

const PreviewPage = () => {
  const history = useHistory()
  const { idRoom } = useParams<{ idRoom: string }>()
  const { room, addPlayerToRoom, setRoomKey, alreadyInTheGame, isHost } = useContext(RoomContext)
  const [next] = useRoomState({})
  const { player } = useContext(PlayerContext)
  const refInputPassword = useRef<string>('')

  const isPrivate = room?.password !== undefined

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  const getTextModal = () => {
    if (isHost(player)) {
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
        history.push(isHost(player) ? paths.HOME : paths.ROOMS)
      }
    })
  }

  const generateInvitationUrl = async () => {
    await navigator.clipboard.writeText(window.location.href)
  }

  const addPlayer = () => {
    if (isPrivate && refInputPassword.current === room?.password) {
      addPlayerToRoom(player)
    }

    if (!isPrivate) {
      addPlayerToRoom(player)
    }
  }

  const FOOTER_BUTTONS: ButtonProps[] = [
    {
      key: 'UNIRSE',
      type: 'submit',
      theme: 'primary',
      size: 'large',
      onClick: () => addPlayer(),
      children: 'UNIRSE'
    }
  ]

  const FOOTER_BUTTONS_HOST: ButtonProps[] = [
    {
      key: 'INVITAR AMIGOS',
      type: 'button',
      theme: 'tertiary',
      size: 'large',
      onClick: () => generateInvitationUrl(),
      children: <><CopyIcon/>INVITAR AMIGOS</>
    },
    {
      key: 'COMENZAR PARTIDA',
      type: 'submit',
      theme: 'primary',
      size: 'large',
      onClick: next,
      children: 'COMENZAR PARTIDA'
    }
  ]

  const footerButtons = useMemo(() => {
    if (isHost(player)) return FOOTER_BUTTONS_HOST

    // TODO: Show blue message that says "waiting to the admin starts the game"
    if (alreadyInTheGame(player)) return

    return FOOTER_BUTTONS
  }, [player, room])

  const setPassword = (pass: string) => {
    refInputPassword.current = pass
  }

  return (
    <Layout
      title={ isPrivate ? room.name + ' 🔒' : room?.name || '' }
      subTitle=""
      onClose={showModal}
      buttons={footerButtons}
    >
      <PlayersList players={room?.players}/>

      <PreviewInfoRoom room={room}/>

      {
        isPrivate && <PasswordRoom setPassword={setPassword}/>
      }

    </Layout>
  )
}

export default PreviewPage
