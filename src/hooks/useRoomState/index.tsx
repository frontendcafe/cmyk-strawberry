import { useContext, useEffect, useRef } from 'react'
import { RoomContext } from '../../contexts/RoomContextState'
import { paths } from '../../routes'
import { StateMapItem, STATE_MAP, useRoomStateType } from './types'

const useRoomState: useRoomStateType = () => {
  const { room, isLastRound, changeRoomStateTo, roomKey } = useContext(RoomContext)
  const actualState = useRef<StateMapItem>()

  const next = () => {
    if (actualState?.current?.nextState) {
      changeRoomStateTo(actualState.current.nextState(isLastRound))
    }
  }

  const validateRedirection = () => {
    if (roomKey && actualState.current?.action) {
      const actualPath = actualState.current.path ?? (paths as any)[actualState.current.action]
      const replacedPath = actualPath.replace(':idRoom', roomKey)

      if (replacedPath !== window.location.pathname) {
        window.location.href = replacedPath
      }
    }
  }

  useEffect(() => {
    const nextState = STATE_MAP.find(({ state }) =>
      state === actualState?.current?.nextState?.(isLastRound)
    )
    if (nextState && actualState?.current?.state !== room.state) {
      const path = nextState.path ?? (paths as any)[nextState.action]
      window.location.href = path.replace(':idRoom', roomKey)
    }

    if (room?.state) {
      actualState.current = STATE_MAP.find(({ state }) => state === room.state)
      validateRedirection()
    }
  }, [room?.state])

  return [next]
}

export default useRoomState
