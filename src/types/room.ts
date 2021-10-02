import React, { Dispatch, SetStateAction } from 'react'
import { RoomState } from '../hooks/useRoomState/types'

export interface ICategory {
  id?: string,
  name: string
}

export interface IPlayer {
  name: string,
  imageIndex: number,
  host?: boolean
  online: boolean
}

export interface IPlayerContext {
  player: IPlayer
  playerKey: string
  addPlayer?: (arg0: IPlayer) => string | null
  addPlayerToContext: (arg0: IPlayer) => void
  updatePlayerInContext: (arg0: IPlayer) => void
}

export interface IRoundGame {
  letter: string,
  playersAnswer: {
    [key: string]: {
      [key: string]: string
    }
  }
  validations: {
    [key: string]: {
      [key: string]: {
        [key: string]: boolean
      }
    }
  }
}

export interface IRoom {
  id?: string,
  name?: string,
  seconds?: number,
  rounds: number,
  roundInProgress: number,
  categories: ICategory[],
  timeout: number | null,
  password: string | null,
  players: IPlayer[],
  state: RoomState,
  roundGame?: IRoundGame[]
}

export interface IRoomContext {
  room: IRoom,
  setRoom: React.Dispatch<React.SetStateAction<IRoom | null>>,
  roomKey: string,
  addPlayerToRoom: (player: IPlayer) => void,
  changeRoomStateTo: (state: RoomState) => void,
  setRoomKey: Dispatch<SetStateAction<string>>,
  addRoundToRoom: (room: IRoom, letter: string) => void,
  currentLetter: () => string,
  isLastRound: boolean,
  alreadyInTheGame: (player: IPlayer) => boolean
  isHost: (player: IPlayer) => boolean
  onlinePlayers: IPlayer[]
}
