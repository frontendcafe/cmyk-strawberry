import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { RoomProvider } from './contexts/RoomContextState'
import { PlayerProvider } from './contexts/PlayerContextState'

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <RoomProvider>
        <App/>
      </RoomProvider>
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
