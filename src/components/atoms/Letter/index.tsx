import React, { useContext, useEffect, useState } from 'react'
import { RoomContext } from '../../../contexts/RoomContextState'
import styles from './Letter.module.scss'

const Letter: React.FC<any> = ({ setShowLetter }) => {
  const [letter, setLetter] = useState('')
  const allLetters = ['A', 'Z', 'C', 'E', 'V', 'G']
  const { addRoundToRoom } = useContext(RoomContext)

  const randomLetter = String.fromCharCode(
    Math.floor(Math.random() * 26) + 65
  )

  useEffect(() => {
    setTimeout(() => {
      setLetter(randomLetter)
      addRoundToRoom()
    }, 3000)

    setTimeout(() => {
      setShowLetter(false)
    }, 5800)
  }, [])

  const randomnumber = () => {
    return Math.random() * 100
  }

  return (
    <div className={`${styles.container}`}>
      {/* <div className={`${styles.containerletters} animate__animated animate__fadeOutDownBig animate__slow`}> */}

      { letter === ''
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
            {letter}
          </div>
        )
      }
    </div>

  )
}

export default Letter
