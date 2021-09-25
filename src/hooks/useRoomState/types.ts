import { paths } from '../../routes'
import { IRoom } from '../../types/room'

export enum actions{
  PREVIEW = 'PREVIEW',
  BOARD = 'BOARD',
  VALIDATION = 'VALIDATION',
  CLASIFICATION = 'CLASIFICATION',
  ENDED = 'ENDED'
}

export enum RoomState {
  CREATED = 'CREATED',
  PLAYING = 'PLAYING',
  VALIDATING = 'VALIDATING',
  RESULTS = 'RESULTS',
  ENDED = 'ENDED'
}

export type useRoomStateType = ({
  room,
  setState
}: {
  room: IRoom,
  setState: (state: RoomState) => void
}) => [(action: actions) => void]

export const STATE_MAP = [
  {
    state: RoomState.CREATED,
    action: actions.PREVIEW,
    path: paths.PREVIEW,
    nextState: () => RoomState.PLAYING
  },
  {
    state: RoomState.PLAYING,
    action: actions.BOARD,
    path: paths.BOARD,
    nextState: () => RoomState.VALIDATING
  },
  {
    state: RoomState.VALIDATING,
    action: actions.VALIDATION,
    path: paths.VALIDATION,
    nextState: () => RoomState.RESULTS
  },
  {
    state: RoomState.RESULTS,
    action: actions.CLASIFICATION,
    path: paths.CLASIFICATION,
    nextState: (isEnd?: boolean) => isEnd ? RoomState.ENDED : RoomState.PLAYING
  },
  {
    state: RoomState.ENDED,
    path: paths.HOME,
    actions: actions.ENDED
  }
]
