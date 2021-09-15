import React from 'react'
import { IRoom } from '../../../types/room'
import { Button } from '../../atoms/Button'
import { Category } from '../../atoms/Category'
import styles from './PreviewInfoRoom.module.scss'
interface Props {
  room: IRoom | null
}

const PreviewInfoRoom: React.FC<Props> = ({ room }) => {
  const userHost = room?.players.find(player => player.host)

  // TODO Obtener el id del usuario logueado
  const userId = '222'

  return (
    <div className={styles.container}>
      <h2>Información de la sala</h2>

      <div>Se esta jugando la ronda 2 de { room?.rounds }</div>
      <hr className={styles.divider}/>

      <div className={styles.endmethod}>La ronda finalizara al presional ¡STOP!</div>
      <hr/>

      <div>{ room?.categories.length } categorias para completas</div>

      <div className={styles.categoriescontainer}>
        {
          room?.categories.map(category => (
            <Category
              key={category.id}
              type="basic"
              label={category.name}
              onClick={() => {}}
            />
          ))
        }
      </div>

      { userHost?.id === userId &&
        <Button
          type="button"
          onClick={() => {}}
          size="large"
          theme="secondary"
          className={styles.editbutton}
        >
          EDITAR CONFIGURACIÓN
        </Button>
      }
    </div>
  )
}

export default PreviewInfoRoom
