import { IRoom, RoomState } from '../../types/room'
import { Props as ButtonProps } from '../../components/atoms/Button'

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
  state: RoomState.CREATED,
  roundInProgress: 0
}

// eslint-disable-next-line no-unused-vars
type footerButtons = (handleClick: () => void) => ButtonProps[]

export const FOOTER_BUTTONS: footerButtons = (handleClick) => [
  {
    key: 'CREATE_GAME',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: handleClick,
    children: 'EDITAR SALA'
  }
]
