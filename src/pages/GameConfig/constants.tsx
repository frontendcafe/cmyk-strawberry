import React from 'react'

import { Props as ButtonProps } from '../../components/atoms/Button'
import { ReactComponent as CopyIcon } from '../../assets/copy.svg'

export const FOOTER_BUTTONS: ButtonProps[] = [
  {
    key: 'INVITE_FRIENDS',
    type: 'button',
    theme: 'secondary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: <><CopyIcon/>INVITAR AMIGOS</>
  },
  {
    key: 'CREATE_GAME',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: 'CREAR'
  }
]

export const MOCK_GAME = {
  rounds: 5,
  timeout: null,
  categories: [
    'Animales',
    'Deportes'
  ],
  password: null,
  players: [
    {
      id: '123',
      name: '9gustin',
      host: true
    }
  ],
  state: 'STARTED' // ENDED
}
