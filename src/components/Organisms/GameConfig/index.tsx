import React from 'react'

import Layout from '../../templates/Layout'
import GameConfigForm from '../GameConfigForm'
import { paths } from '../../../routes'

import { FOOTER_BUTTONS } from './constants'
import { useHistory } from 'react-router'
import { addRoom } from '../../../firebase/services/room'
import { IRoom } from '../../../types/room'
import { setValueType } from '../../../hooks/useForm'

interface Props {
  values: IRoom;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  setValue: setValueType;
  toggleEditing: () => void;
}

const GameConfig: React.FC<Props> = ({ values, handleChange, setValue, toggleEditing }) => {
  const history = useHistory()

  const handleSubmit = () => {
    const roomId = addRoom(values)

    if (roomId) {
      history.push(paths.PREVIEW.replace(':id', roomId))
    }
  }

  return (
    <Layout
      title="Creación de partida"
      subTitle="Configuración de parámetros"
      onClose={() => history.push(paths.HOME)}
      buttons={FOOTER_BUTTONS(handleSubmit)}
    >
      <GameConfigForm
        values={values}
        handleChange={handleChange}
        setValue={setValue}
        toggleEditing={toggleEditing}
      />
    </Layout>
  )
}

export default GameConfig
