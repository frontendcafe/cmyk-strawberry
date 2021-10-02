import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { addPlayer, getPlayerByKeyWithSync, subscribePlayerOnlineStatus, updatePlayer } from '../firebase/services/players'
import { IPlayerContext, IPlayer } from '../types/room'

export const namesPool = [
  'Perrito Malvado',
  'Malvavisco Tostado',
  'Saco de papas',
  'Ráfaga de invierno',
  'Bolsa de boxeo',
  'Hereje de satán',
  'Tender con alas',
  'Capataz del Hobbit',
  'Crema del cielo',
  'Espuma de dios',
  'Cementerio de Doritos',
  'Albondiga de oro',
  'Motociclista a contramano',
  'Pejelagarto',
  'Anato mía',
  'Saco de huesos',
  'Calcetín de Rombos Man',
  'Rin raja',
  'Rollo de cocina',
  'Dentrífico helado'
]

const AVATAR_ARRAY_LENGTH = 5 // TODO: pasarlo a AVATAR Component y exportarlo de ahi para el dia q se agregue mas avatar

export const getRandomName = () => {
  return namesPool[Math.floor(Math.random() * namesPool.length)]
}

export const getRandomAvatarIndex = (actualIndex: number) => {
  let randomIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
  while (randomIndex === actualIndex) {
    randomIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
  }
  return randomIndex
}

export const getRandomPlayer = (host = false): IPlayer => {
  const randomAvatarIndex = Math.floor(Math.random() * AVATAR_ARRAY_LENGTH)
  const randomNameGenerated = getRandomName()
  return {
    name: randomNameGenerated,
    imageIndex: randomAvatarIndex,
    host,
    online: true
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
