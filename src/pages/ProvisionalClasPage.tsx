import React, { useContext, useEffect, useMemo, useState } from 'react'
import ClassificationCard from '../components/molecules/ClassificationCard'
import { Props as ButtonProps } from '../components/atoms/Button'
import Winner from '../components/molecules/Winner'
import { useParams } from 'react-router-dom'
import { RoomContext } from '../contexts/RoomContextState'
import useRoomState from '../hooks/useRoomState'
import Layout from '../components/templates/Layout'
import { PlayerContext } from '../contexts/PlayerContextState'
import { generateData } from '../utils/generateData'
import { getRoundsGame } from '../firebase/services/roundsGame'
import { getValidations } from '../firebase/services/validations'
import { getPlayerByKey } from '../firebase/services/players'

const LABELS = (isEnd: boolean, roundInProgress: number, rounds: number) => isEnd
  ? { title: 'Clasificación Final' }
  : { title: 'Clasificación temporal', subTitle: `Ronda ${roundInProgress}/${rounds}` }

const BUTTONS = (isEnd: boolean, next: () => void): ButtonProps[] => isEnd
  ? [{
    key: 'END_GAME',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: next,
    children: 'VOLVER AL INICIO'
  }]
  : [{
    key: 'NEXT_ROUND',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: next,
    children: 'SIGUIENTE RONDA'
  }]

interface Stats {
  playerKey: string;
  playerName?: string;
  points: number;
}

const ProvisionalClasPage: React.FC = () => {
  const [data, setData] = useState<any>()
  const [gameStats, setGameStates] = useState<Stats[]>([])
  const { isLastRound, setRoomKey, room } = useContext(RoomContext)
  const { player } = useContext(PlayerContext)
  const [next] = useRoomState({})
  const { idRoom } = useParams<{ idRoom: string }>()

  // TODO: In the future must check by another property that name
  const results = useMemo(() => {
    if (!room?.players) return null

    const positions = room.players
      .map(({ name, imageIndex }) => ({
        name,
        image: imageIndex,
        score: gameStats.find(({ playerName }) => playerName === name)?.points ?? 0,
        isCurrentUser: player.name === name
      }))
      .sort((paramA, paramB) => paramA.score > paramB.score ? -1 : 1)

    const winner = isLastRound
      ? {
        name: room.players[0].name,
        image: room.players[0].imageIndex,
        score: gameStats.find(({ playerName }) => playerName === room.players[0].name)?.points ?? 0,
        isCurrentUser: player.name === room.players[0].name
      }
      : null

    return {
      winner,
      positions: winner ? positions.filter(({ name }) => name !== winner.name) : positions
    }
  }, [room, gameStats])

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  useEffect(() => {
    getRoundsGame((data) => generateData(data, newData => setData((prevData: any) => ({
      ...prevData,
      roundsGame: newData
    })), idRoom))
    getValidations((data) => generateData(data, newData => setData((prevData: any) => ({
      ...prevData,
      validations: newData
    })), idRoom))
  }, [room])

  useEffect(() => {
    if (!room?.roundGame || !data?.roundsGame || !data?.validations) return

    let tempStats: Stats[] = []

    Object.keys(room.roundGame).forEach(roundKey => {
      if (!room?.roundGame?.[Number(roundKey)]) return

      const checkLetter = room.roundGame[Number(roundKey)].letter.toLowerCase()
      const roundResponses = data.roundsGame.filter(({ round, playerKey }: any) =>
        round === Number(roundKey) &&
        playerKey
      ) as {
        playerKey: string;
        values: Record<string, string>
      }[]

      // TODO: Use other players validations to get points
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const roundValidations = data.validations.filter(({ round, playerKey }: any) =>
        round === Number(roundKey) &&
        playerKey
      )

      const stats: Stats[] = roundResponses.map(({ playerKey, values }) => {
        const calculate = room.categories.map(({ name }) => {
          // If empty value in this category give 0 points
          if (!values || !(name in values) || values[name].trim() === '') return 0

          const value = values[name].toLowerCase().trim() as string

          // If put a word without start with the letter give 0
          if (!value.startsWith(checkLetter)) return 0

          // If another player put the same give 5 points
          if (roundResponses.some((otherResponse) =>
            otherResponse.playerKey !== playerKey &&
            (otherResponse.values?.[name] && otherResponse.values[name].trim().toLowerCase() === value)
          )) return 5

          // If no one fill's this category give 20 points
          if (roundResponses.every((otherResponse) =>
            otherResponse.playerKey !== playerKey &&
            (!otherResponse.values?.[name] ||
            otherResponse.values[name].trim() !== '')
          )) return 20

          // By default give 10 points
          return 10
        }) as number[]

        const points = calculate.reduce((accumulated, element) =>
          accumulated + element
        , 0)

        return {
          playerKey,
          points
        }
      })

      tempStats = [...tempStats, ...stats]
    })

    const finalStats = tempStats
      .filter((stats, index) => index === tempStats.findIndex(s => s.playerKey === stats.playerKey))
      .map(stats => ({
        playerKey: stats.playerKey,
        points: tempStats.filter(s => s.playerKey === stats.playerKey).reduce((accumulated, element) =>
          accumulated + element.points
        , 0)
      }))

    // TODO: If we save playerKey dont need compare by name
    Promise.all(gameStats.map(p => getPlayerByKey(p.playerKey)))
      .then(data => {
        const result = data.map(d => ({ ...d.val(), key: d.key }))

        const statsWithNames = finalStats.map(s => ({
          ...s,
          playerName: result.find(p => p.key === s.playerKey)?.name
        }))

        setGameStates(statsWithNames)
      })
  }, [data])

  return (
    <Layout
      loading={!results}
      onClose={next}
      buttons={BUTTONS(isLastRound, next)}
      isEnded={isLastRound}
      {...LABELS(isLastRound, room?.roundInProgress, room?.rounds)}
    >
      {
        results?.winner
          ? (
            <>
              <Winner
                avatarIndex={results.winner.image}
                name={results.winner.name}
                score={results.winner.score}
                isCurrentPlayer={results.winner.isCurrentUser}
              />
              { results.positions.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
                <ClassificationCard
                  key={position.name}
                  name={position.name}
                  score={position.score}
                  position={index + 2}
                  avatarIndex={position.image}
                  isCurrentPlayer={position.isCurrentUser}
                />
              ))}
            </>
          )
          : (
            results?.positions.sort((paramA, paramB) => paramA.score + paramB.score).map((position, index) => (
              <ClassificationCard
                key={position.name}
                name={position.name}
                score={position.score}
                position={index + 1}
                avatarIndex={position.image}
                isCurrentPlayer={position.isCurrentUser}
              />
            ))
          )
      }
    </Layout>
  )
}

export default ProvisionalClasPage
