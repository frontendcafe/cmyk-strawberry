import React, { useContext, useState } from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'
import { useHistory } from 'react-router'
import { RoomContext } from '../../contexts/RoomContextState'
import { PlayerContext } from '../../contexts/PlayerContextState'

const ValidationPage = () => {
  const history = useHistory()
  const { room } = useContext(RoomContext)
  const { playerKey } = useContext(PlayerContext)
  const [categoryCount, setCategoryCount] = useState(0)

  // ESTA CONDICION ES PARA QUE TYPESCRIPT NO SE QUEJE, TENEMOS MUCHA BASURA EN LA DB y roundGame puede venir undefined
  if (!room || !room.roundGame || !room.roundGame[room.roundInProgress]) return 'Cargando...'

  const roundInProgress = room.roundInProgress
  const letter = room.roundGame[roundInProgress].letter
  const categoryToEvaluate = room.categories[categoryCount].name
  const playersAnswers: any = Object.entries(room.roundGame[roundInProgress].playersAnswer)
  const { answerOfOtherPlayers, myAnswer } = playersAnswers
    .reduce((acc: any, pa: any) => {
      const [paKey, ans] = pa
      paKey === playerKey
        ? acc.myAnswer.name = ans[categoryToEvaluate]
        : acc.answerOfOtherPlayers.push({ name: ans[categoryToEvaluate] })

      return acc
    }, { myAnswer: { name: '' }, answerOfOtherPlayers: [] })

  const handleValidate = () => {
    if (categoryCount < room.categories.length - 1) {
      setCategoryCount(categoryCount + 1)
    }
  }

  const FOOTER_BUTTONS: ButtonProps[] = [
    {
      type: 'submit',
      theme: 'primary',
      size: 'large',
      onClick: () => handleValidate(),
      children: 'VALIDAR'
    }
  ]

  return (
    <Layout
      title='Validación'
      subTitle='Aprueba o no las palabras'
      onClose={() => history.push(paths.BOARD)}
      buttons={ FOOTER_BUTTONS }
    >
      <CategoryRound
        category={categoryToEvaluate}
        letter={letter}
        categoryCount={categoryCount + 1}
        categoriesTotal={room.categories.length}
      />
      <WordsValidation
        answerOfOtherPlayers={answerOfOtherPlayers}
        myAnswer={myAnswer}
      />
    </Layout>
  )
}

export default ValidationPage
