import React from 'react'
import Slider from '../components/molecules/Slider'
import { RoomContext } from '../contexts/RoomContextState'

const HomePage: React.FC<any> = () => {
  const { room } = React.useContext(RoomContext)
  console.log(room)
  return <Slider/>
}

export default HomePage
