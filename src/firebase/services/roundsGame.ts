import { db } from '../config'
import { ref, push, onValue } from 'firebase/database'

const roundGameRef = ref(db, 'roundGame')

export const addRoundGame = (data : any) => {
  push(roundGameRef, data)
}

export const getRoundsGame = (callback: (data: any) => void) => {
  onValue(roundGameRef, (snapshot) => {
    callback(snapshot.val())
  }, {
    onlyOnce: true
  })
}
