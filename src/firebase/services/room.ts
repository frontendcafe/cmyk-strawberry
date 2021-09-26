import { db } from '../config'
import { get, child, ref, set, push, onValue, update, Unsubscribe } from 'firebase/database'
import { IRoom, IRoundGame } from '../../types/room'

const roomsRef = ref(db, 'rooms')

export const addRoom = (room : IRoom) => {
  const newRoomRef = push(roomsRef)
  set(newRoomRef, room)
  return newRoomRef.key
}

export const getRoomsWithSync = (callback: any): Unsubscribe => {
  return onValue(roomsRef, (snapshot) => {
    callback(snapshot.val())
  })
}

export const getRoomByKeyWithSync = (roomKey: string, callback: any): Unsubscribe => {
  const roomRef = ref(db, `rooms/${roomKey}`)

  const unsuscribe = onValue(roomRef, (snapshot) => {
    callback(snapshot.val())
  })

  return unsuscribe
}

export const updateRoom = (roomKey: string, playerChanges: IRoom) => {
  return update(ref(db, 'rooms/' + roomKey), playerChanges)
}

export const updateRoomPlayersAnswers = (roomKey: string, roundGame: IRoundGame) => {
  return update(ref(db, `rooms/${roomKey}/roundGame`), roundGame)
}

export const getRoomNumber = async () => {
  const roomCount = await get(child(ref(db), 'roomCounter'))
  set(ref(db, 'roomCounter'), roomCount.val() + 1)
  return roomCount.val()
}
