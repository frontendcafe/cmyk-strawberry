import React, { useContext, useState } from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'
import { useHistory } from 'react-router'
import { RoomContext } from '../../contexts/RoomContextState'

const ValidationPage = () => {
  const history = useHistory()
  const { room } = useContext(RoomContext)
  const [categoryCount, setCategoryCount] = useState(0)

  // ESTA CONDICION ES PARA QUE TYPESCRIPT NO SE QUEJE, TENEMOS MUCHA BASURA EN LA DB y roundGame puede venir undefined
  if (!room || !room.roundGame || !room.roundGame[room.roundInProgress]) return null

  const roundInProgress = room.roundInProgress
  const letter = room.roundGame[roundInProgress].letter
  const playersAnswers = Object.entries(room.roundGame[roundInProgress].playersAnswer)
  const categoryInValidation = room.categories[categoryCount].name

  const handleValidate = () => {
    if (categoryCount < room.categories.length - 1) {
      setCategoryCount((prevState) => prevState + 1)
    }
    console.log(playersAnswers)
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
      onClose={() => history.push(paths.HOME)}
      buttons={ FOOTER_BUTTONS }
    >
      <CategoryRound
        category={categoryInValidation}
        letter={letter}
        categoryCount={categoryCount + 1}
        categoriesTotal={room.categories.length}
      />
      <WordsValidation categoryToEvaluate={categoryInValidation} playersAnswers={playersAnswers}/>
    </Layout>
  )
}

export default ValidationPage
