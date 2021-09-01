import React from 'react'
import Countdown from './components/atoms/Countdown'

function App () {
  return (
    <h1>
      <Countdown initialPoint={5} toNumber={0} handleEndCount={() => console.log('a')}/>
    </h1>
  )
}

export default App
