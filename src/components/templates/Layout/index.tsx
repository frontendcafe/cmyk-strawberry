import React from 'react'

import { Button, Props as ButtonProps } from '../../atoms/Button'

import Header, { Props as HeaderProps } from '../../molecules/Header'
import styles from './Layout.module.scss'

interface Props extends HeaderProps{
  children: React.ReactNode;
  buttons?: ButtonProps[];
}

const Layout = ({ title, subTitle, letter, closePath, children, buttons }: Props) => {
  return (
    <div className={styles.container}>
      <Header title={title} subTitle={subTitle} closePath={closePath} letter={letter}/>
      <main className={styles.main}>
        {children}
      </main>
      {buttons && (
        <footer className={styles.footer}>
          {
            buttons.map(({ key, ...buttonProps }: any) => <Button key={key} {...buttonProps}/>)
          }
        </footer>
      )}
    </div>
  )
}

export default Layout
