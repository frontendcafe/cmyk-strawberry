import { paths } from '../../routes'

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

export type useRoomStateType = () => [() => void]

export type StateMapItem = {
  state: RoomState,
  action: actions,
  path: paths,
  nextState?: (isEnd?: boolean) => RoomState
}

export const STATE_MAP: StateMapItem[] = [
  {
    state: RoomState.CREATED,
    action: actions.PREVIEW,
    path: paths && paths.PREVIEW,
    nextState: () => RoomState.PLAYING
  },
  {
    state: RoomState.PLAYING,
    action: actions.BOARD,
    path: paths && paths.BOARD,
    nextState: () => RoomState.VALIDATING
  },
  {
    state: RoomState.VALIDATING,
    action: actions.VALIDATION,
    path: paths && paths.VALIDATION,
    nextState: () => RoomState.RESULTS
  },
  {
    state: RoomState.RESULTS,
    action: actions.CLASIFICATION,
    path: paths && paths.CLASIFICATION,
    nextState: (isEnd?: boolean) => isEnd ? RoomState.ENDED : RoomState.PLAYING
  },
  {
    state: RoomState.ENDED,
    path: paths && paths.HOME,
    action: actions.ENDED
  }
]
