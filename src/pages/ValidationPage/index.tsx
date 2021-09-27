/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState, useEffect, useMemo } from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../../contexts/RoomContextState'
import { PlayerContext } from '../../contexts/PlayerContextState'
import { getValidations } from '../../firebase/services/roundsGame'

interface Validation {
  roomKey: string;
  playerKey: string;
  round: number;
  values: Record<string, string>
}

const ValidationPage = () => {
  const history = useHistory()
  const { room, setRoomKey, currentLetter } = useContext(RoomContext)
  const { playerKey } = useContext(PlayerContext)
  const [categoryCount, setCategoryCount] = useState(0)
  const [validations, setValidations] = useState<Validation[] | null>(null)
  const { idRoom } = useParams<{ idRoom: string }>()

  const generateValidations = (data: Record<string, Validation>) => {
    const parsedData = Object.keys(data).map(key => data[key])
    const inProgressValidation = parsedData.filter(({ roomKey, round }) =>
      roomKey === idRoom && round === room?.roundInProgress
    )
    setValidations(inProgressValidation)
  }

  useEffect(() => {
    setRoomKey(idRoom)
    getValidations(generateValidations)
  }, [room])

  const validating = useMemo(() => {
    if (validations) {
      return {
        word: room?.categories[categoryCount].name,
        myAnswer: {
          name: validations
            .find(val => val.playerKey === playerKey)
            ?.values[room?.categories[categoryCount].name] ?? '-'
        },
        answers: validations
          .filter(val => val.playerKey !== playerKey && Boolean(val.values[room?.categories[categoryCount].name]))
          .map(({ values }) => (
            { name: values[room?.categories[categoryCount].name] }
          ))
      }
    }

    return null
  }, [validations, categoryCount])

  const handleValidate = () => {
    if (categoryCount < room?.categories.length - 1) {
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
      loading={!validating}
    >
      {
        validating && (
          <>
            <CategoryRound
              category={validating.word}
              letter={currentLetter()}
              categoryCount={categoryCount + 1}
              categoriesTotal={room?.categories.length}
            />
            <WordsValidation
              myAnswer={validating.myAnswer}
              answerOfOtherPlayers={validating.answers}
            />
          </>
        )
      }

    </Layout>
  )
}

export default ValidationPage
