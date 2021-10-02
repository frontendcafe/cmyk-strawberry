import React, { useState, useContext, useEffect } from 'react'
import Logotype1 from './../Logotype/Index'
import { Button } from './../Button/index'
import './assets/index.scss'
import Vector from './assets/Vector.svg'
import Subtract from './assets/Subtract.svg'
import Input from './../input/index'
import Avatar from './../Avatars/index'
import { Link } from 'react-router-dom'
import { PlayerContext, getRandomPlayer, getRandomAvatarIndex } from '../../../contexts/PlayerContextState'
import { paths } from '../../../routes'
import { useHistory } from 'react-router'
import { IPlayer } from '../../../types/room'

function Home () {
  const [homePlayer, setHomePlayer] = useState<IPlayer | null>(null)
  const { player, addPlayerToContext, updatePlayerInContext } = useContext(PlayerContext)
  const history = useHistory()

  useEffect(() => {
    /**
     * Si existe player en localstorage, se utiliza la informacion de playerContext
     * Sino se crea un usuario random
     */
    if (player) {
      setHomePlayer(player)
    } else {
      setHomePlayer(getRandomPlayer())
    }
  }, [player])

  const setHomePlayerName = (name: string): void => {
    setHomePlayer({ ...homePlayer!, name })
  }

  const setHomePlayerAvatar = () => {
    const randomIndex = getRandomAvatarIndex(homePlayer!.imageIndex)
    setHomePlayer({ ...homePlayer!, imageIndex: randomIndex })
  }

  function saveNewPlayer (host: boolean) {
    try {
      addPlayerToContext({ ...homePlayer!, host })
    } catch (err) {
      console.log('From Home Screen on saving to DB')
      console.log(err)
    }
  }

  function updatePlayer (host: boolean) {
    try {
      updatePlayerInContext({ ...homePlayer!, host })
    } catch (err) {
      console.log('From Home Screen on updating to DB')
      console.log(err)
    }
  }

  const handleNewRoom = () => {
    const host = true
    if (player) { // Update name and avatar
      updatePlayer(host)
    } else {
      saveNewPlayer(host)
    }
    history.push(paths.GAME_CONFIG)
  }

  const handleFindRoom = () => {
    const host = false
    if (player) {
      updatePlayer(host)
    } else {
      saveNewPlayer(host)
    }
    history.push(paths.ROOMS)
  }

  if (!homePlayer) return 'Cargando...'

  return (
    <div className="background">
      <div className="content">
        <Button
          className="subtract"
          theme="tertiary"
          size="small"
          type="button"
          onClick={() => history.push(paths.RULES)}
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
            onClick={setHomePlayerAvatar}
          >
            <img src={Vector} alt="logo"/>
          </Button>
          <div className="avatar-container">
            <Avatar index={homePlayer.imageIndex}/>
            <div
              className="input"
            >
              <Input
                addButton={false}
                changeHandler={setHomePlayerName} size="small-size"
                value={homePlayer.name}
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
        <Link to='/about'>Sobre nosotros</Link>
      </footer>
    </div>

  )
}

export default Home
