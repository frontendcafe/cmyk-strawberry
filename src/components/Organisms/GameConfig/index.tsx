import React from 'react'

import Layout from '../../templates/Layout'
import GameConfigForm from '../GameConfigForm'
import { paths } from '../../../routes'

import { FOOTER_BUTTONS } from './constants'
import { useHistory } from 'react-router'
import { IRoom } from '../../../types/room'
import { setValueType } from '../../../hooks/useForm'
import withEditCategories from '../../../hoc/withCategoryEdit'

interface Props {
  values: IRoom;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  setValue: setValueType;
  toggleEditing?: () => void;
  handleSubmit: () => void;
}

const GameConfig: React.FC<Props> = ({
  values,
  handleChange,
  setValue,
  toggleEditing,
  handleSubmit
}) => {
  const history = useHistory()

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

export default withEditCategories(GameConfig)
