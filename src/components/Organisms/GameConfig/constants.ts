import { Props as ButtonProps } from '../../atoms/Button'

// eslint-disable-next-line no-unused-vars
type footerButtons = (handleClick: () => void) => ButtonProps[]

export const FOOTER_BUTTONS: footerButtons = (handleClick) => [
  {
    key: 'CREATE_GAME',
    type: 'submit',
    theme: 'primary',
    size: 'large',
    onClick: handleClick,
    children: 'CREAR'
  }
]
