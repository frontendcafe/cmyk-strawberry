import React from 'react'
import Input from '../../atoms/input'
import styles from './PasswordRoom.module.scss'

const index = () => {
  return (
    <div className={styles.container}>
      <h2>Contraseña</h2>
      <p>Escribe una contraseña para unirte</p>
      <Input
        changeHandler={() => console.log('cambiar')}
        size='small-size'
        addButton={false}
      />
    </div>
  )
}

export default index
