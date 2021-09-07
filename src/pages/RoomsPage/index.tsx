import React from 'react'
import Header from '../../components/molecules/Header'
import ToogleRoom from '../../components/molecules/ToogleRoom'
import Rooms from '../../components/Organisms/Rooms'

const labels = {
  TITLE: 'Salas creadas',
  SUB_TITLE: 'Entra a la sala que prefieras',
  CLOSE_PATH: '/'
}

const RoomsPage: React.FC<any> = () => {
  return (
    <>
      <Header title={labels.TITLE} subTitle={labels.SUB_TITLE} closePath={labels.CLOSE_PATH}/>
      <ToogleRoom/>
      <Rooms/>
    </>
  )
}

export default RoomsPage
