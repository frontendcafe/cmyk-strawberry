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
      <h1>App</h1>

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

      <Category
        type = 'approved'
        label="Frutas/Verduras"
        onClick = { () => console.log('HandleChangeCategory')}
      />

      <Category
        type = 'deselected'
        label="Frutas/Verduras"
        onClick = { () => console.log('HandleChangeCategory')}
      />

    </>
  )
}

export default App
