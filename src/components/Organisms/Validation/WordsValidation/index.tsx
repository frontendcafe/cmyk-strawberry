import React from 'react'
import styles from './WordsValidation.module.scss'
import { useCategories } from '../../../../hooks/useCategories'
import { Category } from '../../../atoms/Category'
import ProgressBar from '../ProgressBar'

const MOCK_WORDS = [
  { name: 'Mabel' },
  { name: 'Mi' },
  { name: 'Martin' },
  { name: 'Mexico' },
  { name: 'Ma' }
]

const WordsValidation = () => {
  const [, renderCategories] = useCategories({
    allCategories: MOCK_WORDS,
    mode: 'reviewing'
  })

  return (
    <section className={styles.container}>
      <h3>Tu palabra fue</h3>
      <div>
        <Category
          type='uncheck'
          label='MiPalabra'
        />
      </div>
      <h3>Las palabras de los demas</h3>
      <div className={styles['categories-container']}>
        {renderCategories()}
      </div>
      <div className={styles['progress-container']}>
        <ProgressBar/>
      </div>
    </section>
  )
}

export default WordsValidation
