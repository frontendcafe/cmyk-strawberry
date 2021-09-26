import React from 'react'

import { ReactComponent as CloseIcon } from '../../../assets/close.svg'
import { Button } from '../../atoms/Button'

import styles from './Header.module.scss'

export interface Props {
  title: string;
  subTitle?: string;
  onClose: () => void;
  letter?: string;
  boardStyle?: boolean;
  handleSubmit?: () => void;
}

const Header = ({ title, subTitle, onClose, letter = '', boardStyle, handleSubmit }: Props) => {
  return (
    <header className={styles.header}>
      {
        !boardStyle &&
        (
          <a className={styles.close} onClick={onClose}><CloseIcon/></a>
        )
      }
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
      {
        boardStyle &&
        (
          <Button
            type='button'
            onClick={handleSubmit}
            theme='primary'
            size='medium'
            className='board'
          >
                ¡STOP!
          </Button>
        )
      }
    </header>
  )
}

export default Header
