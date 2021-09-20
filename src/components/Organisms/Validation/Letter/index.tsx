import React from 'react'
import styles from './letter.module.scss'

interface Props {
  letter: string
}
const Letter: React.FC<Props> = ({ letter }) => {
  return (
    <div className={styles.container}>
      {letter}
    </div>
  )
}

export default Letter
