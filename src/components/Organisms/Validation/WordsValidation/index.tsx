import React from 'react'
import styles from './WordsValidation.module.scss'
import { Category } from '../../../atoms/Category'
import ProgressBar from '../ProgressBar'
import { useCategories } from '../../../../hooks/useCategories'

interface Props {
  myAnswer: {name: string}
  answerOfOtherPlayers: any[]
}

const WordsValidation: React.FC<Props> = ({ myAnswer, answerOfOtherPlayers }) => {
  const [, renderCategories] = useCategories({
    allCategories: answerOfOtherPlayers,
    mode: 'reviewing'
  })

  return (
    <section className={styles.container}>
      <h3>Tu palabra fue</h3>
      <div>
        <Category
          type='uncheck'
          label={myAnswer.name}
        />
      </div>
      <h3>Las palabras de los demas</h3>
      <div className={styles['categories-container']}>
        {renderCategories()}
        {answerOfOtherPlayers.map(ap => <div key={ap.name}>{ap.name}</div>)}
      </div>
      <div className={styles['progress-container']}>
        <ProgressBar/>
      </div>
    </section>
  )
}

export default WordsValidation
