import React, { useContext } from 'react'
import styles from './WordsValidation.module.scss'
import { Category } from '../../../atoms/Category'
import ProgressBar from '../ProgressBar'
import { PlayerContext } from '../../../../contexts/PlayerContextState'
import Words from './Words'

interface Props {
  playersAnswers: any[]
  categoryToEvaluate: string
}

const WordsValidation: React.FC<Props> = ({ playersAnswers, categoryToEvaluate }) => {
  const { playerKey } = useContext(PlayerContext)

  const { answerOfOtherPlayers = [], myAnswer } : any = playersAnswers
    .reduce((acc, pa) => {
      const [paKey, ans] = pa
      paKey === playerKey
        ? acc.myAnswer.name = ans[categoryToEvaluate]
        : acc.answerOfOtherPlayers.push({ name: ans[categoryToEvaluate] })

      return acc
    }, { myAnswer: { name: '' }, answerOfOtherPlayers: [] })

  console.log({ answerOfOtherPlayers, myAnswer })

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
      <Words answerOfOtherPlayers={answerOfOtherPlayers}/>
      <div className={styles['progress-container']}>
        <ProgressBar/>
      </div>
    </section>
  )
}

export default WordsValidation
