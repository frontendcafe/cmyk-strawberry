import React from 'react'

import { ReactComponent as CloseIcon } from '../../../assets/close.svg'

import styles from './Header.module.scss'

export interface Props {
  title: string;
  subTitle?: string;
  onClose: () => void;
  letter?: string;
}

const Header = ({ title, subTitle, onClose, letter = '' }: Props) => {
  return (
    <header className={styles.header}>
      <a className={styles.close} onClick={onClose}><CloseIcon/></a>
      {
        letter !== ''
          ? (
            <div className={styles.lettercontainer}>
              <div className={styles.letter}>
                {letter}
              </div>
            </div>
          )
          : (
            <div className={styles.titlecontainer}>
              <h1 className={styles.title}>{title}</h1>
              <span className={styles.subtitle}>{subTitle}</span>
            </div>
          )
      }
    </header>
  )
}

export default Header
