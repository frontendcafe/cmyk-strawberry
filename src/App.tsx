import React from 'react'
import Countdown from './components/atoms/Countdown'

function App ({ prop }: any) {
  return (
    <h1>
      <Countdown
        duration={5}
        handleEnd={() => console.log('a')}
      />
    </h1>
  )
}

export default App
