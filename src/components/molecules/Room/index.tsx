import React from 'react'

import styles from './Room.module.scss'

const Room: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <span>Sala 01</span>
      </div>
      <div>
        <i>icon</i>
        <span>2</span>
      </div>
      <div className={styles.rounds}>
        <span>2/4</span>
        <span>Rondas</span>
      </div>
    </section>
  )
}

export default Room
