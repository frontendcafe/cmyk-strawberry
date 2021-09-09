import React from 'react'
import { useCategories } from '../../../hooks/useCategories'

import Card from '../../atoms/Card'
import Input from '../../atoms/input'
import Select from '../../atoms/Select'
import { roundOptions } from './constants'

import styles from './GameConfigForm.module.scss'

const MOCK_CATEGORIES = [
  { name: 'Comidas' },
  { name: 'Paises' },
  { name: 'Marcas' },
  { name: 'Cosas' },
  { name: 'Frutas/Verduras' }
]

const GameConfigForm = () => {
  const [, renderCategories] = useCategories({
    allCategories: MOCK_CATEGORIES,
    mode: 'view'
  })

  return (
    <form className={styles.form}>
      <Card
        title="Rondas"
        subtitle="Número de rondas a jugar"
      >
        <Select options={roundOptions()}/>
      </Card>
      <Card
        title="Finalización"
        subtitle="Cómo terminara cada ronda"
      >
        <select>
          {roundOptions().map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </Card>
      <Card
        title="Categorías"
        subtitle="Selección de temas a completar"
      >
        {renderCategories()}
      </Card>
      <Card
        title="Contraseña"
        subtitle="Escribiendo una, se hara privada"
      >
        <Input size="small-size" changeHandler={console.log}/>
      </Card>
    </form>
  )
}

export default GameConfigForm
