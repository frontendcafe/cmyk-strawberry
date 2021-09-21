import React from 'react'
import styles from './PlayersList.module.scss'
import Carousel from 'react-elastic-carousel'
import { IPlayer } from '../../../types/room'
import Avatar from '../../atoms/Avatars'

interface Props {
  players: IPlayer[] | undefined
}

const PlayerList: React.FC<Props> = ({ players }) => {
  return (
    <div className={styles.container}>
      { players !== undefined &&
          (
            <Carousel
              itemsToShow={4}
              isRTL={false}
              disableArrowsOnEnd
              pagination={false}
              showArrows={false}
            >
              {players?.map((player:IPlayer) => (
                <div key={ player.id } className={styles.avatar}>
                  <Avatar index={player.imageIndex}/>
                  <p>{player.name}</p>
                </div>
              ))}
            </Carousel>
          )
      }
    </div>
  )
}

export default PlayerList
