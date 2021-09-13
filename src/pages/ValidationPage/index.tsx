import React from 'react'
import CategoryRound from '../../components/Organisms/Validation/CategoryRound'

const categories = ['comida']
const ValidationPage:any = () => {
  return (
    <CategoryRound categories={categories} letter='M'/>
  )
}

export default ValidationPage
