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
    unsuscribeEvent = getRoomByKeyWithSync(roomKey, setRoom)

    return () => unsuscribeEvent?.()
  }, [])

  useEffect(() => {
    if (room) {
      updateRoom(roomKey, room)
    }
  }, [room])

  return (
    <RoomContext.Provider value={ { room, roomKey } }>
      {children}
    </RoomContext.Provider>
  )
}
