import React, { useContext, useEffect } from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'
import { useHistory, useParams } from 'react-router'
import { RoomContext } from '../../contexts/RoomContextState'

export const FOOTER_BUTTONS: ButtonProps[] = [
  {
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: 'VALIDAR'
  }
]

const categories = ['comida']

const ValidationPage = () => {
  const history = useHistory()
  const { idRoom } = useParams<{ idRoom: string }>()

  // TODO use room from context
  const { setRoomKey } = useContext(RoomContext)

  useEffect(() => {
    setRoomKey(idRoom)
  }, [])

  return (
    <Layout
      title='Validación'
      subTitle='Aprueba o no las palabras'
      onClose={() => history.push(paths.HOME)}
      buttons={ FOOTER_BUTTONS }
    >
      <CategoryRound categories={categories} letter='M'/>
      <WordsValidation/>
    </Layout>
  )
}

export default ValidationPage
