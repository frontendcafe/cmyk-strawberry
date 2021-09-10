import React from 'react'
import styles from './PlayersList.module.scss'
import Carousel from 'react-elastic-carousel'
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

      <Carousel
        itemsToShow={4}
        isRTL={false}
        disableArrowsOnEnd
        pagination={false}
        showArrows={false}
      >
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
      </Carousel>
    </div>
  )
}

export default PlayerList
