import { db } from '../config'
import { ref, set, push } from 'firebase/database'
import { IRoom } from '../../types/room'

const roomsRef = ref(db, 'rooms')

export const addRoom = (room : IRoom) => {
  const newRoomRef = push(roomsRef)
  set(newRoomRef, room)
  return newRoomRef.key
}
