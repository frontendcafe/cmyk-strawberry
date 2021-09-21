import React, { createContext, useState, useEffect } from 'react'
import { getRoomByKeyWithSync, updateRoom } from '../firebase/services/room'
import { IPlayer, IRoomContext, RoomState } from '../types/room'
import { Unsubscribe } from 'firebase/database'
import { paths } from '../routes'

export const RoomContext = createContext<IRoomContext>({} as IRoomContext)

export const RoomProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState<any>(null)
  const [roomKey, setRoomKey] = useState('')
  let unsuscribeEvent: Unsubscribe | null = null

  useEffect(() => {
    if (roomKey) { unsuscribeEvent = getRoomByKeyWithSync(roomKey, setRoom) }

    return () => unsuscribeEvent?.()
  }, [roomKey])

  useEffect(() => {
    if (room) {
      updateRoom(roomKey, room)
    }
  }, [room])

  const addPlayerToRoom = (player: IPlayer, history: any) => {
    // check player is already in the room
    if (room && room.players.find((p:any) => p.id === player.id) !== undefined) {
      history.push(paths.BOARD)
      return
    }

    // check room useState
    if (room && room.state !== RoomState.ENDED) {
      setRoom((prevState: any) => ({
        ...prevState,
        players: room.players?.concat(player)
      }))
      history.push(paths.BOARD)
    }
  }

  const changeRoomStateTo = (state: RoomState, history: any) => {
    setRoom((prevState: any) => ({
      ...prevState,
      state
    }))

    history.push(paths.BOARD)
  }

  return (
    <RoomContext.Provider value={ { room, addPlayerToRoom, changeRoomStateTo, roomKey, setRoomKey } }>
      {children}
    </RoomContext.Provider>
  )
}
