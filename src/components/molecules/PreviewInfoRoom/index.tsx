import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import { PlayerContext } from '../../../contexts/PlayerContextState'
import { RoomContext } from '../../../contexts/RoomContextState'
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
  const { isHost } = useContext(RoomContext)
  const history = useHistory()

  const handleEditRoom = () => idRoom && history.push(paths.EDIT_CONFIG.replace(':idRoom', idRoom))

  return (
    <div className={styles.container}>
      <h2>Información de la sala</h2>

      {
        room?.roundInProgress === 0
          ? <div>Se jugarán { room?.rounds } rondas en total </div>
          : <div>Se está jugando la ronda { room?.roundInProgress } de { room?.rounds }</div>
      }

      <hr className={styles.divider}/>

      <div className={styles.endmethod}>La ronda finalizara al presionar ¡STOP!</div>
      <hr/>

      <div>{ room?.categories.length } categorías para completar</div>

      <div className={styles.categoriescontainer}>
        {
          room?.categories.map(category => (
            <Category
              key={category.name}
              type="basic"
              label={category.name}
              onClick={() => {}}
            />
          ))
        }
      </div>

      { isHost(player) &&
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
