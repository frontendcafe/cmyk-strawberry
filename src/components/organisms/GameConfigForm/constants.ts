import { SelectOption } from '../../atoms/Select'

export const MIN_ROUNDS_QUANTITY = 4
export const MAX_ROUNDS_QUANTITY = 12

export function roundOptions ():SelectOption[] {
  const roundOptions = []

  for (let index = MIN_ROUNDS_QUANTITY; index <= MAX_ROUNDS_QUANTITY; index++) {
    roundOptions.push({
      value: index,
      label: `${index} Rondas`
    })
  }

  return roundOptions
}

export const GAME_CONFIG_FIELDS = {
  PASSWORD: 'password',
  CATEGORIES: 'categories',
  ROUNDS: 'rounds'
}
