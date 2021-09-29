export const generateData = (data: any, callback: (data: any) => void, idRoom: string, roundInProgress?: number) => {
  const parsedData = Object.keys(data).map((key) => data[key])
  const inProgressValidation = parsedData.filter(
    ({ roomKey, round }) =>
      roomKey === idRoom && (!roundInProgress || round === roundInProgress)
  )

  callback(inProgressValidation)
}
