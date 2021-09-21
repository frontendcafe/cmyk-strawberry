import React from 'react'
import { Category } from '../../../atoms/Category'
import Letter from '../Letter'

import styles from './CategoryRound.module.scss'

interface Props {
  category: string
  categoriesTotal: number
  categoryCount: number
  letter: string
}

const CategoryRound: React.FC<Props> = ({ category, letter, categoryCount, categoriesTotal }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <span className={styles.title}>Categoria {categoryCount}/{categoriesTotal}</span>
        <div>
          <Category
            type='basic'
            label={category}
            onClick={() => 'TODO'}
          >
            {category}
          </Category>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.right}>
        <div className={styles['right-container']}>
          <span className={styles.title}>Letra</span>
          <div><Letter letter={letter}/></div>
        </div>
      </div>
    </section>
  )
}

export default CategoryRound
