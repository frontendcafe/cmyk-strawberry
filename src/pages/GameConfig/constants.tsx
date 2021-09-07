import React from 'react'

import { Props as ButtonProps } from '../../components/atoms/Button'
import { ReactComponent as CopyIcon } from '../../assets/copy.svg'

export const FOOTER_BUTTONS: ButtonProps[] = [
  {
    type: 'button',
    theme: 'secondary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: <><CopyIcon/>INVITAR AMIGOS</>
  },
  {
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: () => console.log('todo'),
    children: 'CREAR'
  }
]
