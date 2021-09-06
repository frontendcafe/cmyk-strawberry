import React, { useEffect } from 'react'
import { Modal } from '../components/atoms/Modal'

const HomePage: React.FC<any> = () => {
  useEffect(() => {
    Modal.fire({
      text: 'Volver al inicio del juego',
      title: '¿Estas seguro que quieres salir de la sala?',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('click in confirm')
      } else if (result.isDismissed) {
        console.log('click in cancel')
      }
    })
  }, [])

  return <h1>Home page !</h1>
}

export default HomePage
