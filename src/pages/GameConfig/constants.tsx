import React from 'react'

import { Props as ButtonProps } from '../../components/atoms/Button'
import { ReactComponent as CopyIcon } from '../../assets/copy.svg'
import { IRoom } from '../../types/room'

// eslint-disable-next-line no-unused-vars
type footerButtons = (handleClick: () => void) => ButtonProps[]

export const FOOTER_BUTTONS: footerButtons = (handleClick) => [
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
    onClick: handleClick,
    children: 'CREAR'
  }
]

export const MOCK_GAME: IRoom = {
  rounds: 5,
  timeout: null,
  categories: [
    { id: '1', name: 'Animales' },
    { id: '2', name: 'Deportes' }
  ],
  password: null,
  players: [
    {
      id: '123',
      name: '9gustin',
      host: true
    }
  ],
  state: 'CREATED' // ENDED
}
