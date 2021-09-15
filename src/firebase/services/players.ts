import { db } from '../config'
import { ref, set, push, onValue, child, get, update, onDisconnect } from 'firebase/database'

interface Player {
  name?: string
  online?: Boolean
  avatar?: string
}

const dbRef = ref(db)
const playersRef = ref(db, 'players')

export const addPlayer = (player : Player) => {
  const newPlayerRef = push(playersRef) // push retorna una ThenableReference
  set(newPlayerRef, player)
  return newPlayerRef.key
}

export const getPlayerByKey = (playerKey: string) => {
  return get(child(dbRef, `players/${playerKey}`))
}

export const getPlayerByKeyWithSync = (playerKey: string, callback: any) => {
  const playerRef = ref(db, `players/${playerKey}`)
  onValue(playerRef, (snapshot) => {
    callback(snapshot.val())
  })
}

export const getPlayersWithSync = (callback: any) => {
  onValue(playersRef, (snapshot) => {
    callback(snapshot.val())
  })
}

export const updatePlayer = (playerKey: string, playerChanges: Player) => {
  return update(ref(db, 'players/' + playerKey), playerChanges)
}

export const deletePlayer = (playerKey: string) => {
  return set(ref(db, 'players/' + playerKey), null)
}

export const subscribePlayerOnlineStatus = (playerKey: string) => {
  const playerRef = ref(db, 'players/' + playerKey)
  const isOnlineRef = ref(db, '.info/connected')

  onValue(isOnlineRef, (snap) => {
    if (snap.val() === true) {
      update(playerRef, {
        online: true
      })
      onDisconnect(playerRef).update({
        online: false
      })
    }
  })
}
