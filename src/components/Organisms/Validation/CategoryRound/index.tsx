import React from 'react'
import { Category } from '../../../atoms/Category'
import Letter from '../Letter'

import styles from './CategoryRound.module.scss'

interface Props {
  categories: string[]
  letter: string
}

const CategoryRound: React.FC<Props> = ({ categories }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <span className={styles.title}>Categoria 1/5</span>
        <div>
          <Category
            type='basic'
            label={categories[0]}
            onClick={() => 'TODO'}
          >
            {categories[0]}
          </Category>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.right}>
        <div className={styles['right-container']}>
          <span className={styles.title}>Letra</span>
          <div><Letter letter='M'/></div>
        </div>
      </div>
    </section>
  )
}

export default CategoryRound
