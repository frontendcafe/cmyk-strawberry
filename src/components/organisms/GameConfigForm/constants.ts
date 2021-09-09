import { SelectOption } from '../../atoms/Select'

export const MIN_ROUNDS_QUANTITY = 4
export const MAX_ROUNDS_QUANTITY = 12

export function roundOptions ():SelectOption[] {
  const roundsQuantity = MAX_ROUNDS_QUANTITY - MIN_ROUNDS_QUANTITY

  const roundOptions = new Array(roundsQuantity)

  for (let index = MIN_ROUNDS_QUANTITY; index <= MAX_ROUNDS_QUANTITY; index++) {
    roundOptions[index] = {
      value: index,
      label: `${index} Rondas`
    }
  }

  return roundOptions
}
