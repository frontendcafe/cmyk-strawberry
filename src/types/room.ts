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
  state: RoomState.CREATED | RoomState.IN_PROGRESS | RoomState.ENDED
}

export interface IRoomContext {
  room: IRoom,
  setRoom?: React.Dispatch<React.SetStateAction<IRoom | null>>,
  addPlayerToRoom: (player: IPlayer, history: any) => void,
  changeRoomStateTo: (state: RoomState, history: any) => void,
  setRoomKey: Dispatch<SetStateAction<string>>
}

export enum RoomState {
  CREATED,
  IN_PROGRESS,
  ENDED
}
