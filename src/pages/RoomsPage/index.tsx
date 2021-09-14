import React, { useState } from 'react'
import ToogleRoom from '../../components/molecules/ToogleRoom'
import Rooms from '../../components/Organisms/Rooms'
import Layout from '../../components/templates/Layout'
import { rooms } from '../../../dummyDB'
import { useHistory } from 'react-router-dom'

const labels = {
  TITLE: 'Salas creadas',
  SUB_TITLE: 'Entra a la sala que prefieras',
  CLOSE_PATH: '/'
}

const RoomsPage: React.FC = () => {
  const [showPrivate, setShowPrivate] = useState(false)
  const history = useHistory()

  return (
    <Layout title={labels.TITLE} subTitle={labels.SUB_TITLE} onClose={() => history.push(labels.CLOSE_PATH)}>
      <ToogleRoom setShowPrivate={setShowPrivate}/>
      <Rooms showPrivate={showPrivate} rooms={rooms}/>
    </Layout>
  )
}

export default RoomsPage
