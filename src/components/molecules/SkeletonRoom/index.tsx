import React from 'react'

import styles from './SkeletonRoom.module.scss'

const SkeletonRoom: React.FC = () => {
  return (
    <section className={styles['dummy-container']}>
      <div className={styles.skeleton}/>
      <div className={styles.skeleton}/>
      <div className={styles['skeleton-small-wrap']}>
        <div className={styles['skeleton-small']}/>
        <div className={styles['skeleton-medium']}/>
      </div>
    </section>
  )
}

export default SkeletonRoom
