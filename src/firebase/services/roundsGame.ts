import { db } from '../config'
import { ref, push } from 'firebase/database'

const roundGameRef = ref(db, 'roundGame')

export const addRoundGame = (data : any) => {
  push(roundGameRef, data)
}
