import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PlayerContext } from '../../../contexts/PlayerContextState'
import { RoomContext } from '../../../contexts/RoomContextState'
import { paths } from '../../../routes'
import Layout from '../../templates/Layout'
import styles from './Letter.module.scss'

const Letter: React.FC<any> = ({ room, setShowLetter, setShowCoutdown }) => {
  const [hasLetter, setHasLetter] = useState(false)
  const allLetters = ['A', 'Z', 'C', 'E', 'V', 'G']
  const { addRoundToRoom, currentLetter, isHost } = useContext(RoomContext)
  const { player } = useContext(PlayerContext)
  const history = useHistory()

  const randomLetter = String.fromCharCode(
    Math.floor(Math.random() * 26) + 65
  )

  useEffect(() => {
    setTimeout(() => {
      setHasLetter(true)

      // TODO: Validate if exists a previous round already created
      if (isHost(player)) {
        addRoundToRoom(room, randomLetter)
      }
    }, 3000)

    setTimeout(() => {
      setShowLetter(false)
      setShowCoutdown(true)
    }, 5800)
  }, [])

  const randomnumber = () => {
    return Math.random() * 100
  }

  return (
    <Layout
      title="La letra elegida es..."
      subTitle=""
      onClose={() => history.push(paths.HOME)}
    >
      <div className={`${styles.container}`}>
        {/* <div className={`${styles.containerletters} animate__animated animate__fadeOutDownBig animate__slow`}> */}

        { !hasLetter
          ? (
            <div className={`${styles.containerletters}`}>
              <div className="animate__animated animate__slideOutDown animate__slow">
                {allLetters.sort(() => Math.random() - 0.5).map((letter: string) => (
                  <div key={letter} className={`${styles.lettermini}`}
                    style={{
                      transform: `rotate(${randomnumber()}deg)`
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="animate__animated animate__slideOutDown">
                {allLetters.sort(() => Math.random() - 0.5).map((letter: string) => (
                  <div key={letter} className={`${styles.lettermini}`}
                    style={{
                      transform: `rotate(${randomnumber()}deg)`
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="animate__animated animate__slideOutDown animate__slower">
                {allLetters.sort(() => Math.random() - 0.5).map((letter: string) => (
                  <div key={letter} className={`${styles.lettermini}`}
                    style={{
                      transform: `rotate(-${randomnumber()}deg)`
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          )
          : (
            <div
              className={`${styles.letter} animate__animated animate__backInUp animate__slow`}
            >
              {currentLetter()}
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default Letter
