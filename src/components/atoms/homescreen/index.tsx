import React, { useState, useContext, useEffect } from 'react'
import Logotype1 from './../Logotype/Index'
import { Button } from './../Button/index'
import './assets/index.scss'
import Vector from './assets/Vector.svg'
import Subtract from './assets/Subtract.svg'
import Input from './../input/index'
import Avatar from './../Avatars/index'
import { Link } from 'react-router-dom'
import { PlayerContext, getRandomName } from '../../../contexts/PlayerContextState'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useHistory } from 'react-router'
import { paths } from '../../../routes'

const AVATAR_ARRAY_LENGTH = 5 // TODO: pasarlo a avatar component
const randomAvatarIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)

function Home () {
  const { player, addPlayerToContext, updatePlayerInContext } = useContext(PlayerContext)
  const [avatarIndex, setAvatarIndex] = useState(randomAvatarIndex)
  const [playerName, setPlayerName] = useState('')
  const [playerKeyFromLS]: any = useLocalStorage('player_key', null)
  const history = useHistory()

  useEffect(() => {
    // si hay player en contexto, sino name vacio y randomAvatar
    if (playerKeyFromLS) {
      setPlayerName(player?.name ?? '')
      setAvatarIndex(player?.imageIndex ?? randomAvatarIndex)
    }
  }, [player])

  function saveNewPlayer (host: boolean) {
    const selectedPlayerName = playerName === ''
      ? getRandomName()
      : playerName

    const newPlayer = {
      name: selectedPlayerName,
      imageIndex: avatarIndex,
      host,
      online: true
    }
    try {
      addPlayerToContext(newPlayer)
    } catch (err) {
      console.log('From Home Screen on saving to DB')
      console.log(err)
    }
  }

  function updatePlayer (host: boolean) {
    const selectedPlayerName = playerName === ''
      ? getRandomName()
      : playerName

    const newPlayer = {
      name: selectedPlayerName,
      imageIndex: avatarIndex,
      host,
      online: true
    }
    try {
      updatePlayerInContext(newPlayer)
    } catch (err) {
      console.log('From Home Screen on updating to DB')
      console.log(err)
    }
  }

  const handleNewRoom = () => {
    const host = true
    if (playerKeyFromLS) { // Update name and avatar
      updatePlayer(host)
    } else {
      saveNewPlayer(host)
    }
    history.push(paths.GAME_CONFIG)
  }

  const handleFindRoom = () => {
    const host = false
    if (playerKeyFromLS) {
      updatePlayer(host)
    } else {
      saveNewPlayer(host)
    }
    history.push(paths.ROOMS)
  }

  const handleAvatarChange = () => {
    let randomIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
    while (randomIndex === avatarIndex) {
      randomIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
    }
    setAvatarIndex(randomIndex)
  }

  return (
    <div className="background">
      <div className="content">
        <Button
          className="subtract"
          theme="tertiary"
          size="small"
          type="button"
          onClick={console.log}
        ><img src={Subtract} alt=""/></Button>
        <div className="title">

          <Logotype1/>

        </div>
        <main>
          <Button
            className="vector"
            theme="tertiary"
            size="small"
            type="reset"
            onClick={() => handleAvatarChange()}
          >
            <img src={Vector} alt="logo"/>
          </Button>
          <div className="avatar-container">
            <Avatar index={avatarIndex}/>
            <div
              className="input"
            >
              <Input
                addButton={false}
                changeHandler={setPlayerName} size="small-size"
                value={playerName}
              />

              <div className="buttons">

                <Button type="button" size="large" theme="primary" onClick={handleNewRoom}>Crear partida</Button>

                <Button type="button" size="large" theme="tertiary" onClick={handleFindRoom}>Buscar partida</Button>
              </div>
            </div>
          </div>

        </main>
      </div>
      <footer className="footer">
        <Link to='/about/:number'>Sobre nosotros</Link>
      </footer>
    </div>

  )
}

export default Home
