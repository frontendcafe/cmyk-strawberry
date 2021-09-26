import React, { Dispatch, SetStateAction } from 'react'
import { RouteComponentProps } from 'react-router'
import { RoomState } from '../hooks/useRoomState/types'

export interface ICategory {
  id?: string,
  name: string
}

export interface IPlayer {
  id: string,
  name: string,
  imageIndex: number,
  host?: boolean
}

export interface IPlayerContext {
  player: IPlayer,
  addPlayer: (arg0: IPlayer) => string | null
  playerKey: string
}

export interface IRoundGame {
  letter: string,
  playersAnswer: {
    [key: string]: {
      [key: string]: string
    }
  }
  validation?: {
    [key: string]:{
      categories: {
        [key: string]: {
          [key: string]: boolean
        }[]
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
  changeRoomStateTo: (state: RoomState, history?: RouteComponentProps['history']) => void,
  setRoomKey: Dispatch<SetStateAction<string>>,
  addRoundToRoom: (room: IRoom, letter: string) => void,
  currentLetter: () => string,
  isLastRound: boolean,
  alreadyInTheGame: (player: IPlayer) => boolean
  isHost: (player: IPlayer) => boolean
}
