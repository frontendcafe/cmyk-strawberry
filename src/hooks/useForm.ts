import React, { useState } from 'react'

export type setValueType = (prop: string, value: unknown) => void

type useFormType = <DataType>(initialState: DataType) => [
  DataType,
  (e:React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
  setValueType,
  (data: DataType) => void
]

export const useForm: useFormType = (initialState) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const setValue: setValueType = (prop, value) => {
    setValues({
      ...values,
      [prop]: value
    })
  }

  return [values, handleInputChange, reset, setValue, setValues]
}
