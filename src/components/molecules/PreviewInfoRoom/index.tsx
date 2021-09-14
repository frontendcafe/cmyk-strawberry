import React from 'react'
import { Button } from '../../atoms/Button'
import { Category } from '../../atoms/Category'
import styles from './PreviewInfoRoom.module.scss'

interface ICategory {
  id: string,
  name: string
}

interface IRoom {
  id: string,
  name: string,
  rounds: number,
  seconds: number,
  categories: ICategory[],
  userHost: string
}

interface Props {
  room: IRoom
}

const PreviewInfoRoom: React.FC<Props> = ({ room }) => {
  const { rounds, seconds, categories } = room

  // TODO Obtener el id del usuario logueado
  const userId = '6'

  return (
    <div className={styles.container}>
      <h2>Información de la sala</h2>

      <div>Se esta jugando la ronda 2 de { rounds }</div>
      <hr className={styles.divider}/>

      <div className={styles.endmethod}>La ronda finalizara al concluir los { seconds } segundos</div>
      <hr/>

      <div>{ categories.length } categorias para completas</div>

      <div className={styles.categoriescontainer}>
        {
          categories.map(category => (
            <Category
              key={category.id}
              type="basic"
              label={category.name}
              onClick={() => {}}
            />
          ))
        }
      </div>

      { room.userHost === userId &&
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
