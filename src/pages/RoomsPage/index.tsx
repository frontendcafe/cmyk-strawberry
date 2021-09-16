import React, { useEffect, useState } from 'react'
import ToogleRoom from '../../components/molecules/ToogleRoom'
import Rooms from '../../components/Organisms/Rooms'
import Layout from '../../components/templates/Layout'
import { getRoomsWithSync } from '../../firebase/services/room'
import { useHistory } from 'react-router-dom'
import { Unsubscribe } from 'firebase/database'

const labels = {
  TITLE: 'Salas creadas',
  SUB_TITLE: 'Entra a la sala que prefieras',
  CLOSE_PATH: '/'
}

const RoomsPage: React.FC = () => {
  const [showPrivate, setShowPrivate] = useState(false)
  const [rooms, setRooms] = useState({})
  const history = useHistory()
  let unsuscribeEvent: Unsubscribe | null = null

  useEffect(() => {
    unsuscribeEvent = getRoomsWithSync(setRooms)
    return () => unsuscribeEvent?.()
  }, [])

  console.log(rooms)

  const roomsArr = Object.keys(rooms).map(roomKey => ({ id: roomKey, ...(rooms as any)[roomKey] }))

  return (
    <Layout title={labels.TITLE} subTitle={labels.SUB_TITLE} onClose={() => history.push(labels.CLOSE_PATH)}>
      <ToogleRoom setShowPrivate={setShowPrivate}/>
      <Rooms showPrivate={showPrivate} rooms={roomsArr}/>
    </Layout>
  )
}

export default RoomsPage
