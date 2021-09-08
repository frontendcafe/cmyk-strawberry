import React, { useState } from 'react'

// eslint-disable-next-line no-unused-vars
export const useForm = (initialState = {}): [Record<string, string>, (e:React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [values, setValues] = useState<Record<string, string>>(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInputChange, reset]
}
