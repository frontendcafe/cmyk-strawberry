import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import EditCategories from '../../components/Organisms/EditCategories'
import GameConfig from '../../components/Organisms/GameConfig'
import { GAME_CONFIG_FIELDS } from '../../components/Organisms/GameConfigForm/constants'
import { RoomContext } from '../../contexts/RoomContextState'
import { iCategory } from '../../hooks/useCategories/types'
import { useForm } from '../../hooks/useForm'
import { IRoom } from '../../types/room'
import { INITIAL_STATE_GAME } from './constants'

const NewGame = () => {
  const [values, handleChange,, setValue, setValues] = useForm<IRoom>(INITIAL_STATE_GAME)
  
  const { idRoom } = useParams<{ idRoom: string }>()
  const { room, setRoomKey } = useContext(RoomContext)

  const handleChangeCategories = (categories: iCategory[]) =>
    setValue(GAME_CONFIG_FIELDS.CATEGORIES, categories)

  const toggleEditing = () => {
    if (!editing) {
      window.scrollTo(0, 0)
    }
    setEditing(prevValue => !prevValue)
  }

  useEffect(() => {
    if (idRoom) {
      setRoomKey(idRoom)
    }
  }, [])

  useEffect(() => {
    setValues(room ?? INITIAL_STATE_GAME)
  }, [room])

  return editing
    ? (
      <EditCategories
        categories={values.categories}
        setCategories={handleChangeCategories}
        toggleEditing={toggleEditing}
      />
    )
    : (
      <GameConfig
        values={values}
        handleChange={handleChange}
        setValue={setValue}
        toggleEditing={toggleEditing}
      />
    )
}

export default NewGame
