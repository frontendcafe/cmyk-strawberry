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
  room: IRoom | null,
  setRoom?: React.Dispatch<React.SetStateAction<IRoom | null>>
}

export enum RoomState {
  CREATED,
  IN_PROGRESS,
  ENDED
}
