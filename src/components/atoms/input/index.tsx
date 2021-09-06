import React, { Fragment } from 'react'
import styles from './Index.module.scss'

interface Props {
    changeHandler: (value: string) => void;
    buttonHandler?: () => void;
    size: 'small-size' | 'medium-size'
    addButton: boolean
}

const Input: React.FC<Props> = ({ changeHandler, buttonHandler, size, addButton = false }) => {
  return (
    <>
      { size === 'small-size'
        ? <>
          <input
            type="text"
            className={styles.input}
            onChange={({ target: { value } }) => changeHandler(value)}
          />
          {
            addButton === true && <button onClick={ buttonHandler }> Mas </button>
          }
        </>
        : <>
          <input
            type="text"
            className={`${styles.input} ${styles.medium}`}
            onChange={({ target: { value } }) => changeHandler(value)}
          />
          {
            addButton === true && <button onClick={ buttonHandler }> Mas </button>
          }
        </>
      }
    </>
  )
}

export default Input
