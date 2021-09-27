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
import { useCategories } from '../../hooks/useCategories'
import useRoomState from '../../hooks/useRoomState'

interface Validation {
  roomKey: string;
  playerKey: string;
  round: number;
  values: Record<string, string>;
}

const ValidationPage = () => {
  const history = useHistory()
  const {
    room,
    setRoomKey,
    currentLetter,
    addValidation,
    onlinePlayers,
    isHost
  } = useContext(RoomContext)
  const { player, playerKey } = useContext(PlayerContext)
  const [categoryCount, setCategoryCount] = useState(0)
  const [validations, setValidations] = useState<Validation[] | null>(null)
  const [myValidation, setMyValidation] = useState<Record<string, boolean>>()
  const [sended, setSended] = useState(false)
  const { idRoom } = useParams<{ idRoom: string }>()
  const [next] = useRoomState({})

  const generateValidations = (data: Record<string, Validation>) => {
    const parsedData = Object.keys(data).map((key) => data[key])
    const inProgressValidation = parsedData.filter(
      ({ roomKey, round }) =>
        roomKey === idRoom && round === room?.roundInProgress
    )
    setValidations(inProgressValidation)
  }

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  useEffect(() => {
    getValidations(generateValidations)
  }, [room])

  const validating = useMemo(() => {
    if (validations) {
      return {
        word: room?.categories[categoryCount].name,
        myAnswer: {
          name:
            validations.find((val) => val.playerKey === playerKey)?.values[
              room?.categories[categoryCount].name
            ] ?? '-'
        },
        answers: validations
          .filter(
            (val) =>
              val.playerKey !== playerKey &&
              Boolean(val.values?.[room?.categories[categoryCount].name])
          )
          .map(({ values }) => ({
            name: values[room?.categories[categoryCount].name]
          }))
      }
    }

    return null
  }, [validations, categoryCount, playerKey])

  const [, renderAnswers, selectedAnswers] = useCategories({
    allCategories: validating?.answers ?? [],
    mode: 'reviewing'
  })

  const handleValidate = () => {
    if (categoryCount < room?.categories.length - 1) {
      setMyValidation((prevValue) => ({
        ...prevValue,
        ...Object.fromEntries(selectedAnswers.map(({ name }) => [name, true]))
      }))
      setCategoryCount(categoryCount + 1)
    } else if (myValidation) {
      addValidation(myValidation, playerKey)
      setSended(true)
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

  useEffect(() => {
    const validations = room?.roundGame?.[room.roundInProgress]?.validations
    if (validations &&
      Object.keys(validations).length >= onlinePlayers.length &&
      isHost(player)
    ) {
      next()
    }
  }, [room?.roundGame])

  return (
    <Layout
      title="Validación"
      subTitle="Aprueba o no las palabras"
      onClose={() => history.push(paths.BOARD)}
      buttons={sended ? undefined : FOOTER_BUTTONS}
      loading={!validating}
    >
      {validating && (
        <>
          <CategoryRound
            category={validating.word}
            letter={currentLetter()}
            categoryCount={categoryCount + 1}
            categoriesTotal={room?.categories.length}
          />
          <WordsValidation
            myAnswer={validating.myAnswer}
            renderAnswers={renderAnswers()}
          />
        </>
      )}
    </Layout>
  )
}

export default ValidationPage
