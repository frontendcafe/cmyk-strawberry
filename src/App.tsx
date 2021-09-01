import React, { useState } from 'react'
import { Category } from './components/atoms/Category/Category'

function App () {
  const [category, setCategory] = useState('deselected')
  const [category2, setCategory2] = useState('disapproved')

  const handleClickCategory = () => {
    setCategory(category === 'deselected' ? 'approved' : 'deselected')
  }

  const handleClickCategory2 = () => {
    setCategory2(category2 === 'disapproved' ? 'approved' : 'disapproved')
  }

  return (
    <>
      <h1>Tutti Stop App</h1>

      <h2>Category Atom</h2>

      <Category
        type = { category }
        label="Frutas/Verduras"
        onClick = { handleClickCategory }
      />

      <Category
        type = { category2 }
        label="Frutas/Verduras"
        onClick = { handleClickCategory2 }
      />

    </>

  )
}

export default App
