import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react'
import { getRoomByKeyWithSync, updateRoom } from '../firebase/services/room'
import { IPlayer, IRoom, IRoomContext } from '../types/room'
import { Unsubscribe } from 'firebase/database'
import { RoomState } from '../hooks/useRoomState/types'

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

  // TODO: Review user check, maybe it must be for id or playerKey
  const alreadyInTheGame = useCallback((player: IPlayer) =>
    room && room.players.find((p:IPlayer) => p.name === player.name)
  , [room])

  const addPlayerToRoom = (player: IPlayer) => {
    if (!room) return

    if (alreadyInTheGame(player)) {
      return
    }

    // check room useState
    if (room.state !== RoomState.ENDED) {
      setRoom((prevState: any) => ({
        ...prevState,
        players: room.players?.concat(player)
      }))
    }
  }

  const changeRoomStateTo = (state: RoomState) => {
    setRoom((prevState: any) => ({
      ...prevState,
      state
    }))
  }

  const currentLetter = () => {
    if (room && room.roundGame) {
      const roundGame = room.roundGame[room.roundInProgress]
      if (roundGame) {
        return roundGame.letter
      }
    }
    return ''
  }

  const addRoundToRoom = (room: IRoom, letter: string) => {
    console.log('letter', letter)

    setRoom((prevState: IRoom) => ({
      ...prevState,
      roundInProgress: prevState.roundInProgress + 1,
      roundGame: {
        ...prevState.roundGame,
        [prevState.roundInProgress + 1]: {
          letter: letter
        }
      }
    }))
  }

  const isHost = (player: IPlayer) =>
    room && player.name === room?.players.find(({ host }: IPlayer) => host)?.name

  const isLastRound = useMemo(() =>
    room?.roundGame?.length && (room.roundInProgress === room.roundGame.length)
  , [room])

  const onlinePlayers = useMemo(() =>
    room?.players.filter(({ online }: IPlayer) => online)
  , [room])

  return (
    <RoomContext.Provider
      value={ {
        room,
        addPlayerToRoom,
        changeRoomStateTo,
        roomKey,
        setRoomKey,
        setRoom,
        addRoundToRoom,
        currentLetter,
        isLastRound,
        alreadyInTheGame,
        isHost,
        onlinePlayers
      } }
    >
      {children}
    </RoomContext.Provider>
  )
}
