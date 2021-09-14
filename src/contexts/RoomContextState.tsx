import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { getRoomByKeyWithSync } from '../firebase/services/room'
import { IRoomContext } from '../types/room'

export const RoomContext = createContext<IRoomContext>({} as IRoomContext)

export const RoomProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState(null)
  const [roomKey] = useLocalStorage('room_key', '-MjKz1_1N27ZUvGxfVrA')

  useEffect(() => {
    if (roomKey) {
      getRoomByKeyWithSync(roomKey, setRoom)
    } // TODO: Write to localstorage when join or create a room
  }, [])

  return (
    <RoomContext.Provider value={ { room } }>
      {children}
    </RoomContext.Provider>
  )
}
