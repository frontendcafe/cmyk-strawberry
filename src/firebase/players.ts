import { db } from './config'
import { ref, set, push } from 'firebase/database'

interface Player {
  name: string
  online: Boolean
}

const playersRef = ref(db, 'players')

export const addPlayer = (player : Player) => {
  const newPlayerRef = push(playersRef) // push retorna una ThenableReference
  set(newPlayerRef, player)
  return newPlayerRef.key
}
