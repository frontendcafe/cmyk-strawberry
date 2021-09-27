import React from 'react'
import { useCategories } from '../../../../hooks/useCategories'
import styles from './WordsValidation.module.scss'

interface Props {
  answerOfOtherPlayers: any[]
}

const Words: React.FC<Props> = ({ answerOfOtherPlayers }) => {
  console.log(answerOfOtherPlayers)
  const [, renderCategories] = useCategories({
    allCategories: answerOfOtherPlayers,
    mode: 'reviewing'
  })
  return (
    <div className={styles['categories-container']}>
      {renderCategories()}
    </div>
  )
}

export default Words
