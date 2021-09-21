import React, { Dispatch, SetStateAction } from 'react'

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
  [key: number] : {
    letter: string,
    playersAnswer: {
      [key: string]: {
        [key: string]: string
      }
    }
  }
}

export interface IRoom {
  id?: string,
  name?: string,
  seconds?: number,
  rounds: number,
  categories: ICategory[],
  timeout: number | null,
  password: string | null,
  players: IPlayer[],
  state: RoomState.CREATED | RoomState.IN_PROGRESS | RoomState.ENDED,
  roundGame?: IRoundGame[],
  roundInProgress: number,
}

export interface IRoomContext {
  room: IRoom,
  setRoom?: React.Dispatch<React.SetStateAction<IRoom | null>>,
  roomKey: string,
  addPlayerToRoom: (player: IPlayer, history: any) => void,
  changeRoomStateTo: (state: RoomState, history: any, idRoom: string) => void,
  setRoomKey: Dispatch<SetStateAction<string>>,
  addRoundToRoom: () => void,
}

export enum RoomState {
  CREATED,
  IN_PROGRESS,
  ENDED
}
