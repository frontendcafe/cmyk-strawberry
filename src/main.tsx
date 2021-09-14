import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { RoomProvider } from './contexts/RoomContextState'

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <App/>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
