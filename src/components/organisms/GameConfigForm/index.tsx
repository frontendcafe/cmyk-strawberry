import React from 'react'

import Card from '../../atoms/Card'
import { Category } from '../../atoms/Category'
import Input from '../../atoms/input'
import Select from '../../atoms/Select'
import { roundOptions } from './constants'

import styles from './GameConfigForm.module.scss'

const GameConfigForm = () => {
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
        <Category type="approved" label="category"/>
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
