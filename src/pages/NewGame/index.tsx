import React, { useState } from 'react'
import EditCategories from '../../components/Organisms/EditCategories'
import GameConfig from '../../components/Organisms/GameConfig'
import { useForm } from '../../hooks/useForm'
import { IRoom } from '../../types/room'
import { INITIAL_STATE_GAME } from './constants'

const NewGame = () => {
  const [values, handleChange,, setValue] = useForm<IRoom>(INITIAL_STATE_GAME as any)
  const [editing, setEditing] = useState(false)

  const toggleEditing = () => {
    if (!editing) {
      window.scrollTo(0, 0)
    }
    setEditing(prevValue => !prevValue)
  }

  return editing
    ? <EditCategories
      categories={values.categories}
      toggleEditing={toggleEditing}
    />
    : <GameConfig
      values={values}
      handleChange={handleChange}
      setValue={setValue}
      toggleEditing={toggleEditing}
    />
}

export default NewGame
