import React from 'react'
import styles from './WordsValidation.module.scss'
import { Category } from '../../../atoms/Category'
import ProgressBar from '../ProgressBar'
import { iCategory } from '../../../../hooks/useCategories/types'

interface Props {
  myAnswer: iCategory
  renderAnswers: React.ReactNode
}

const WordsValidation: React.FC<Props> = ({ myAnswer, renderAnswers }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.text}>Tu palabra fue</h3>
      <div>
        <Category
          type='uncheck'
          label={myAnswer.name}
        />
      </div>
      <h3 className={styles.text}>Las palabras de los demás</h3>
      <div className={styles['categories-container']}>
        {renderAnswers}
      </div>
      <div className={styles['progress-container']}>
        <ProgressBar/>
      </div>
    </section>
  )
}

export default WordsValidation
