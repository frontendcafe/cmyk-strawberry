import React from 'react'

import { Button, Props as ButtonProps } from '../../atoms/Button'

import Header, { Props as HeaderProps } from '../../molecules/Header'
import styles from './Layout.module.scss'

export interface Props extends HeaderProps{
  children?: React.ReactNode;
  buttons?: ButtonProps[];
  loading?: boolean;
  handleSubmit?: () => void;
  boardStyle?: boolean;
}

const Layout = ({ title, subTitle, letter, onClose, children, buttons, loading, handleSubmit, boardStyle }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Header title={title} subTitle={subTitle} onClose={onClose} letter={letter} boardStyle={boardStyle} handleSubmit={handleSubmit}/>
        {/* <Button
          type='button'
          onClick={() => handleSubmit()}
          theme='primary'
          size='large'
          handleButtonClick
        >
        ¡BASTA!
        </Button> */}
      </div>

      <main className={styles.main}>
        {loading ? 'Cargando...' : children}
      </main>
      {buttons && (
        <footer className={styles.footer}>
          {
            buttons.map(({ key, ...buttonProps }) => <Button key={key} {...buttonProps}/>)
          }
        </footer>
      )}
    </div>
  )
}

export default Layout
