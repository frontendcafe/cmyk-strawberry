import React from 'react'

interface ICategory {
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
  player: IPlayer | null
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
  roundGame?: IRoundGame[]
}

export interface IRoomContext {
  room: IRoom | null,
  setRoom?: React.Dispatch<React.SetStateAction<IRoom | null>>,
  roomKey: string
}

export enum RoomState {
  CREATED,
  IN_PROGRESS,
  ENDED
}
