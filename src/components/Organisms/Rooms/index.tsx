import React from 'react'
import Room from '../../molecules/Room'

import styles from './Rooms.module.scss'

const Rooms: React.FC = () => {
  return (
    <section className={styles.container}>
      <Room/>
    </section>
  )
}

export default Rooms
