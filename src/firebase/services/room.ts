import { db } from '../config'
import { ref, set, push, onValue } from 'firebase/database'
import { IRoom } from '../../types/room'

const roomsRef = ref(db, 'rooms')

export const addRoom = (room : IRoom) => {
  const newRoomRef = push(roomsRef)
  set(newRoomRef, room)
  return newRoomRef.key
}

export const getRoomByKeyWithSync = (roomKey: string, callback: any) => {
  const roomRef = ref(db, `rooms/${roomKey}`)
  onValue(roomRef, (snapshot) => {
    callback(snapshot.val())
  })
}
