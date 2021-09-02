import React from 'react'
import { Button } from './components/atoms/Button/Button'

function App () {
  return (
    <>
      <h1>Tutti Stop App</h1>

      <h2>Button Atom</h2>

      <Button
        type="button"
        onClick={ () => console.log('Di click')}
        theme="default"
        size="small"
      >
        Prueba
      </Button>

      <Button
        type="submit"
        onClick={ () => console.log('Di click')}
        theme="rounded"
        size="medium"
        disabled
      >
        Prueba 2
      </Button>

      <Button
        type="reset"
        onClick={ () => console.log('Di click')}
        theme="default"
        size="large"
      >
        Prueba 3
      </Button>

      <Button
        type="button"
        onClick={ () => console.log('Di click')}
        theme="default"
        size="small"
        disabled
      >
        Prueba 4
      </Button>
    </>
  )
}

export default App
