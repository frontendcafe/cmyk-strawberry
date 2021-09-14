import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { getRoomByKeyWithSync, updateRoom } from '../firebase/services/room'
import { IRoomContext } from '../types/room'
import { Unsubscribe } from 'firebase/database'

export const RoomContext = createContext<IRoomContext>({} as IRoomContext)

export const RoomProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState(null)
  const [roomKey] = useLocalStorage('room_key', '-MjKz1_1N27ZUvGxfVrA')
  let unsuscribeEvent: Unsubscribe | null = null

  useEffect(() => {
    if (roomKey) {
      if (room) {
        updateRoom(roomKey, room)
      } else {
        unsuscribeEvent = getRoomByKeyWithSync(roomKey, setRoom)
      }
    } else {
      setRoom(null)
      unsuscribeEvent?.()
    }

    return () => unsuscribeEvent?.()
  }, [room, roomKey])

  return (
    <RoomContext.Provider value={ { room } }>
      {children}
    </RoomContext.Provider>
  )
}
