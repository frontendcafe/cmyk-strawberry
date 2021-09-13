import React from 'react'
import { Category } from '../../../atoms/Category'

import styles from './CategoryRound.module.scss'

interface Props {
  categories: string[]
  letter: string
}

const CategoryRound: React.FC<Props> = ({ categories, letter }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <span>Categoria 1/5</span>
        <Category
          type='deselected'
          label={categories[0]}
          onClick={() => ''}
        >{categories[0]}</Category>
      </div>
      <div className={styles.right}>
        <span>Letra</span>
        <span>{letter}</span>
      </div>
    </section>
  )
}

export default CategoryRound
