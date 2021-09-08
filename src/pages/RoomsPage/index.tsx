import React, { useState } from 'react'
import Header from '../../components/molecules/Header'
import ToogleRoom from '../../components/molecules/ToogleRoom'
import Rooms from '../../components/Organisms/Rooms'
import { rooms } from '../../../dummyDB'

const labels = {
  TITLE: 'Salas creadas',
  SUB_TITLE: 'Entra a la sala que prefieras',
  CLOSE_PATH: '/'
}

const RoomsPage: React.FC<any> = () => {
  const [showPrivate, setShowPrivate] = useState(false)

  return (
    <>
      <Header title={labels.TITLE} subTitle={labels.SUB_TITLE} closePath={labels.CLOSE_PATH}/>
      <ToogleRoom setShowPrivate={setShowPrivate}/>
      <Rooms showPrivate={showPrivate} rooms={rooms}/>
    </>
  )
}

export default RoomsPage
