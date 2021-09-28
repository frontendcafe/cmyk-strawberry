import React, { useContext, useState, useEffect, useMemo } from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../../contexts/RoomContextState'
import { PlayerContext } from '../../contexts/PlayerContextState'
import { getRoundsGame } from '../../firebase/services/roundsGame'
import { useCategories } from '../../hooks/useCategories'
import useRoomState from '../../hooks/useRoomState'
import { getValidationsWithSync, saveValidation } from '../../firebase/services/validations'

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
    roomKey,
    setRoomKey,
    currentLetter,
    onlinePlayers,
    isHost
  } = useContext(RoomContext)
  const { player, playerKey } = useContext(PlayerContext)
  const [categoryCount, setCategoryCount] = useState(0)
  const [validations, setValidations] = useState<Validation[] | null>(null)
  const [savedValidations, setSavedValidations] = useState<any>(null)
  const [myValidation, setMyValidation] = useState<Record<string, boolean>>()
  const [sended, setSended] = useState(false)
  const [nextSended, setNextSended] = useState(false)
  const { idRoom } = useParams<{ idRoom: string }>()
  const [next] = useRoomState({})

  const generateData = (data: any, callback: (data: any) => void) => {
    const parsedData = Object.keys(data).map((key) => data[key])
    const inProgressValidation = parsedData.filter(
      ({ roomKey, round }) =>
        roomKey === idRoom && round === room?.roundInProgress
    )
    callback(inProgressValidation)
  }

  const validating = useMemo(() => {
    if (validations) {
      return {
        word: room?.categories[categoryCount].name,
        myAnswer: {
          name:
            validations.find((val) => val.playerKey === playerKey)?.values?.[
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
      setSended(true)
      const validation = {
        roomKey,
        playerKey,
        round: room.roundInProgress,
        values: myValidation
      }
      saveValidation(validation)
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
    setRoomKey(idRoom)
  }, [])

  useEffect(() => {
    getRoundsGame((data) => generateData(data, setValidations))
    const unsuscribe = getValidationsWithSync((data) => generateData(data, setSavedValidations))

    return () => unsuscribe()
  }, [room])

  useEffect(() => {
    if (savedValidations &&
      onlinePlayers &&
      savedValidations.length >= onlinePlayers.length &&
      isHost(player) &&
      !nextSended
    ) {
      setNextSended(true)
      next()
    }
  }, [onlinePlayers, savedValidations])

  const getDurationProgress = () => {
    const cantPlayers = room?.players.length
    return cantPlayers > 4 ? (5 * ((cantPlayers - 4) * 2.5)) : 5
  }

  return (
    <Layout
      title="Validación"
      subTitle="Aprueba o no las palabras"
      onClose={() => history.push(paths.BOARD)}
      buttons={sended ? undefined : FOOTER_BUTTONS}
      loading={!validating}
    >
      {validating && room && (
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
            durationProgress={ getDurationProgress() }
            onCompleteProgress={ handleValidate }
          />
        </>
      )}
    </Layout>
  )
}

export default ValidationPage
