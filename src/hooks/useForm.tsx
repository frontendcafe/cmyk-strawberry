import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState<any>(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({ target }:any) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInputChange, reset]
}
