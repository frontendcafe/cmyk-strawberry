import React from 'react'
import Input from '../../atoms/input'
import styles from './PasswordRoom.module.scss'

interface Props {
  setPassword: (password: string) => void
}

const index:React.FC<Props> = ({ setPassword }) => {
  return (
    <div className={styles.container}>
      <h2>Contraseña</h2>
      <p>Escribe una contraseña para unirte</p>
      <Input
        changeHandler={setPassword}
        size='small-size'
        addButton={false}
      />
    </div>
  )
}

export default index
