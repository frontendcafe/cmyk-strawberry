import React from 'react'
import { Button } from './components/atoms/Button/Button'

function App () {
  return (
    <>
      <h1>Tutti Stop App</h1>

      <h2>Atoms</h2>

      <div>
        <h2>Button</h2>

        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="primary"
          size="medium"
        >
          primary medium
        </Button>
        <br/>
        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="primary"
          size="medium"
        >
          primary small
        </Button>
        <br/>
        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="secondary"
          size="small"
        >
          secondary small
        </Button>
        <br/>

        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="secondary"
          size="medium"
        >
          secondary medium
        </Button>
        <br/>

        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="tertiary"
          size="small"
        >
          tertiary small
        </Button>
        <br/>
        <Button
          type="button"
          onClick={ () => console.log('Di click')}
          theme="tertiary"
          size="medium"
        >
          tertiary medium
        </Button>

      </div>

    </>
  )
}

export default App
