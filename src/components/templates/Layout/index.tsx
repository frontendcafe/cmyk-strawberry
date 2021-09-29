import React from 'react'

import { Button, Props as ButtonProps } from '../../atoms/Button'

import Header, { Props as HeaderProps } from '../../molecules/Header'
import styles from './Layout.module.scss'

export interface Props extends HeaderProps{
  children?: React.ReactNode;
  buttons?: ButtonProps[];
  loading?: boolean;
  handleButtonClick?: () => void;
  className?: string;
  isEnded?: boolean;
}

const Layout = ({
  className,
  title,
  subTitle,
  letter,
  onClose,
  children,
  buttons,
  loading,
  handleButtonClick,
  isEnded
}: Props) => {
  return (
    <div className={`${styles.container} ${isEnded ? styles.ended : ''}${className ?? ''}`}>
      <div>
        <Header title={title} subTitle={subTitle} onClose={onClose} letter={letter} handleButtonClick={handleButtonClick}/>
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
