import { IRoom, RoomState } from '../../types/room'

export const INITIAL_STATE_GAME: IRoom = {
  rounds: 5,
  timeout: null,
  categories: [
    { name: 'Comidas' },
    { name: 'Países' },
    { name: 'Marcas' },
    { name: 'Cosas' },
    { name: 'Frutas/Verduras' }
  ],
  password: null,
  players: [],
  state: RoomState.CREATED
}
