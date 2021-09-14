import React from 'react'
import Avatar from '../components/atoms/Avatars'
import { RoomContext } from '../contexts/RoomContextState'

const HomePage: React.FC<any> = () => {
  const { room } = React.useContext(RoomContext)
  console.log(room)
  return <Avatar/>
}

export default HomePage
