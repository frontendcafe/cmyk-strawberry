import React from 'react'

import { ReactComponent as CloseIcon } from '../../../assets/close.svg'
import { Button } from '../../atoms/Button'

import styles from './Header.module.scss'

export interface Props {
  title: string;
  subTitle?: string;
  onClose: () => void;
  letter?: string;
  handleButtonClick?: () => void;
}

const Header = ({ title, subTitle, onClose, letter = '', handleButtonClick }: Props) => {
  return (
    <header className={styles.header}>
      {
        !handleButtonClick &&
        (
          <a className={styles.close} onClick={onClose}><CloseIcon/></a>
        )
      }
      {
        letter !== ''
          ? (
            <div className={`${styles.lettercontainer} ${handleButtonClick ? styles.letterboard : ''}`}>
              <div className={styles.letter}>
                {letter}

              </div>
            </div>
          )
          : (
            <div className={styles.lettercontainer}>
              <h1 className={styles.title}>{title}</h1>
              <span className={styles.subtitle}>{subTitle}</span>
            </div>
          )
      }
      {
        handleButtonClick &&
        (
          <Button
            type='button'
            onClick={handleButtonClick}
            theme='primary'
            size='medium'
            className={styles.board}
          >
                ¡STOP!
          </Button>
        )
      }
    </header>
  )
}

export default Header
