import React from 'react'
import { useCategories } from '../../../hooks/useCategories'
import { setValueType } from '../../../hooks/useForm'
import { IRoom } from '../../../types/room'
import { Button } from '../../atoms/Button'

import Card from '../../atoms/Card'
import Input from '../../atoms/input'
import Select from '../../atoms/Select'
import { GAME_CONFIG_FIELDS, roundOptions } from './constants'

import styles from './GameConfigForm.module.scss'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: setValueType;
  values: IRoom;
  toggleEditing?: () => void;
}

const GameConfigForm: React.FC<Props> = ({
  values,
  handleChange,
  setValue,
  toggleEditing
}) => {
  const [, renderCategories] = useCategories({
    allCategories: values.categories,
    mode: 'view'
  })

  const rounds = roundOptions()
  const selectedRounds = rounds.find(option => Number(option.value) === values.rounds)

  return (
    <form className={styles.form}>
      <Card
        title="Rondas"
        subtitle="Número de rondas a jugar"
      >
        <Select
          name={GAME_CONFIG_FIELDS.ROUNDS}
          options={rounds}
          setValue={setValue}
          value={selectedRounds ?? null}
        />
      </Card>
      <Card
        title="Categorías"
        subtitle="Selección de temas a completar"
      >
        <div className={styles.categories}>
          {renderCategories()}
        </div>
        <Button
          type="button"
          size="medium"
          theme="secondary"
          onClick={toggleEditing}
          className={styles['edit-btn']}
        >
          EDITAR CATEGORIAS
        </Button>
      </Card>
      <Card
        title="Contraseña"
        subtitle="Escribí una contraseña para que la sala se convierta en privada."
      >
        <Input
          name={GAME_CONFIG_FIELDS.PASSWORD}
          size="small-size"
          onChange={handleChange}
          value={values.password ?? ''}
        />
      </Card>
    </form>
  )
}

export default GameConfigForm
