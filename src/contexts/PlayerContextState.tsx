import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { addPlayer, getPlayerByKeyWithSync, subscribePlayerOnlineStatus, updatePlayer } from '../firebase/services/players'
import { IPlayerContext, IPlayer } from '../types/room'

export const namesPool = [
  'Malvavisco Tostado',
  'Cazadora de Pollitos',
  'Cementerio de Doritos',
  'Saco de papas',
  'Perrito Malvado',
  'Tommiyiyi',
  'Albondiga de oro'
]

export const getRandomName = () => {
  return namesPool[Math.floor(Math.random() * namesPool.length)]
}

const AVATAR_ARRAY_LENGTH = 5 // TODO: pasarlo a AVATAR Component y exportarlo de ahi para el dia q se agregue mas avatar

export const getRandomPlayer = (host = false) => {
  const randomAvatarIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
  const randomNameGenerated = getRandomName()
  return {
    name: randomNameGenerated,
    imageIndex: randomAvatarIndex,
    host
  }
}

export const PlayerContext = createContext<IPlayerContext>({} as IPlayerContext)

export const PlayerProvider: React.FC = ({ children }) => {
  const [player, setPlayer]: any = useState(null)
  const [playerKey, setPlayerKeyToLS]: any = useLocalStorage('player_key', null)

  useEffect(() => {
    if (playerKey) {
      getPlayerByKeyWithSync(playerKey, setPlayer)
      subscribePlayerOnlineStatus(playerKey)
    } else {
      setPlayer(getRandomPlayer()) // TODO: que hacer con este randomPlayer?
    }
  }, [])

  const addPlayerToContext = (player: IPlayer) => {
    const newPlayerKey = addPlayer(player)
    setPlayerKeyToLS(newPlayerKey)
    setPlayer(player)
  }

  const updatePlayerInContext = (playerChange: IPlayer) => {
    updatePlayer(playerKey, playerChange)
    setPlayer(player)
  }

  return (
    <PlayerContext.Provider value={ { player, playerKey, addPlayerToContext, updatePlayerInContext } }>
      {children}
    </PlayerContext.Provider>
  )
}
