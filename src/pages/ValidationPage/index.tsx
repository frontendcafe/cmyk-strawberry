import React from 'react'
import Layout from '../../components/templates/Layout'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'
import { paths } from '../../routes'
import { Props as ButtonProps } from '../../components/atoms/Button'
import WordsValidation from '../../components/Organisms/Validation/WordsValidation'

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
  return (
    <Layout
      title='Validación'
      subTitle='Aprueba o no las palabras'
      closePath={paths.HOME}
      buttons={ FOOTER_BUTTONS }
    >
      <CategoryRound categories={categories} letter='M'/>
      <WordsValidation/>
    </Layout>
  )
}

export default ValidationPage
