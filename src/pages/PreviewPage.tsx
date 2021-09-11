import React from 'react'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { Props as ButtonProps } from '../components/atoms/Button'
import PlayersList from '../components/molecules/PlayersList'
import PreviewInfoRoom from '../components/molecules/PreviewInfoRoom'
import PasswordRoom from '../components/molecules/PasswordRoom'

export const FOOTER_BUTTONS: ButtonProps[] = [
  {
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: 'UNIRSE'
  }
]

const playersMock = [
  {
    id: '1',
    name: 'Juan',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  },
  {
    id: '2',
    name: 'Pedro',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  },
  {
    id: '3',
    name: 'Andres',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  },
  {
    id: '4',
    name: 'Camilo',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  },
  {
    id: '5',
    name: 'Sergio',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  },
  {
    id: '6',
    name: 'Alex',
    urlImage: 'https://lh3.googleusercontent.com/proxy/WLuLBdzYqHREBRQQNbKPScTarjj8pNiroMmzrIyMUakC_w1deiaa2-F8Ru4bCjiqyGMl0CjSRhE5cERoZ-175vZyYwfD8bPTDr_oXUYnCl6yAh2k7fNYSosveQ'
  }
]

const categoriesMock = [
  {
    id: '1',
    name: 'Comidas'
  },
  {
    id: '2',
    name: 'Países'
  },
  {
    id: '3',
    name: 'Frutas/Verduras'
  },
  {
    id: '4',
    name: 'Marcas'
  },
  {
    id: '5',
    name: 'Cosas'
  }
]

const roomMock = {
  id: '1',
  name: 'Sala 1',
  rounds: 10,
  seconds: 70,
  categories: categoriesMock
}

const PreviewPage = ({ players = playersMock, room = roomMock, isPrivate = true }) => {
  return (
    <Layout
      title={ isPrivate ? room.name + ' 🔒' : room.name }
      subTitle=""
      closePath={paths.HOME}
      buttons={ FOOTER_BUTTONS }
    >
      <PlayersList players={players}/>

      <PreviewInfoRoom room={room}/>

      {
        isPrivate && <PasswordRoom/>
      }

    </Layout>
  )
}

export default PreviewPage
