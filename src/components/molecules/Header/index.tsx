import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '../../../assets/close.svg'

import styles from './Header.module.scss'

export interface Props {
  title: string;
  subTitle: string;
  closePath: string;
  letter?: string;
}

const Header = ({ title, subTitle, closePath, letter = '' }: Props) => {
  return (
    <header className={styles.header}>
      <Link to={closePath} className={styles.close}><CloseIcon/></Link>
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
