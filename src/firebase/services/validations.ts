import { db } from '../config'
import { ref, push, onValue } from 'firebase/database'

const validationsRef = ref(db, 'validations')

export const saveValidation = (data : any) => {
  push(validationsRef, data)
}

export const getValidationsWithSync = (callback: (data: any) => void) => {
  return onValue(validationsRef, (snapshot) => {
    callback(snapshot.val())
  })
}

export const getValidations = (callback: (data: any) => void) => {
  onValue(validationsRef, (snapshot) => {
    callback(snapshot.val())
  }, {
    onlyOnce: true
  })
}
