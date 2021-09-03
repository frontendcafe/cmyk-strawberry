import React from 'react'
import styles from './Letter.module.scss'

const Letter: React.FC<any> = () => {
  return (
    <div
      className={`${styles.letter} animate__animated animate__backInUp`}
    >
      M
    </div>
  )
}

export default Letter
