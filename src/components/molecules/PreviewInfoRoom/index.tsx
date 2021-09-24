import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import { PlayerContext } from '../../../contexts/PlayerContextState'
import { paths } from '../../../routes'
import { IRoom } from '../../../types/room'
import { Button } from '../../atoms/Button'
import { Category } from '../../atoms/Category'
import styles from './PreviewInfoRoom.module.scss'
interface Props {
  room: IRoom | null
}

const PreviewInfoRoom: React.FC<Props> = ({ room }) => {
  const { idRoom } = useParams<{ idRoom: string }>()
  const { player } = useContext(PlayerContext)
  const history = useHistory()
  const userHost = room?.players.find(player => player?.host)

  const handleEditRoom = () => idRoom && history.push(paths.EDIT_CONFIG.replace(':idRoom', idRoom))

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

      { userHost?.id === player?.id &&
        <Button
          type="button"
          onClick={handleEditRoom}
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
