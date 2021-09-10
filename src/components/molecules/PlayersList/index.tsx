import React from 'react'
import styles from './PlayersList.module.scss'

interface IPlayer {
  id: string,
  name: string,
  urlImage: string,
}

interface Props {
  players: IPlayer[]
}

const PlayerList: React.FC<Props> = ({ players }) => {
  return (
    <div className={styles.container}>

      {players.map((player:IPlayer) => (
        <div key={ player.id }>
          <img
            className={styles.avatarimg}
            src={player.urlImage}
            alt={player.name}
          />
          <p>{player.name}</p>
        </div>
      ))}

    </div>
  )
}

export default PlayerList
