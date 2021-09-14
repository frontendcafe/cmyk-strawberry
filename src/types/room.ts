import React from 'react'

interface ICategory {
  id: string,
  name: string
}

interface IPlayer {
  id: string,
  name: string,
  urlImage?: string,
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
  state: 'CREATED' | 'IN_PROGRESS' | 'ENDED'
}

export interface IRoomContext {
  room: IRoom | null,
  setRoom?: React.Dispatch<React.SetStateAction<IRoom | null>>
}
