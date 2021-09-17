import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { addPlayer, getPlayerByKeyWithSync, subscribePlayerOnlineStatus } from '../firebase/services/players'

export const PlayerContext = createContext<any>({} as any)

export const PlayerProvider: React.FC = ({ children }) => {
  const [player, setPlayer] = useState('000')
  const [playerKey] = useLocalStorage('player_key', 'player1_key')

  useEffect(() => {
    if (playerKey) {
      getPlayerByKeyWithSync(playerKey, setPlayer)
      subscribePlayerOnlineStatus(playerKey)
    }
  }, [])

  return (
    <PlayerContext.Provider value={ { player, addPlayer } }>
      {children}
    </PlayerContext.Provider>
  )
}
