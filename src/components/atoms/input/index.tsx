import React, { Fragment } from 'react'
import styles from './Index.module.scss'

interface Props {
    changeHandler?: (value:string) => void;
    buttonHandler?: () => void;
    size: 'small-size' | 'medium-size';
    addButton?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ name, value, changeHandler, buttonHandler, size, onChange, addButton = false }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }

    if (changeHandler) {
      changeHandler(event.target.value)
    }
  }

  return (
    <>
      { size === 'small-size'
        ? <>
          <input
            type="text"
            name={name}
            value={value}
            className={styles.input}
            onChange={handleChange}
          />
          {
            addButton === true && <button onClick={ buttonHandler }> Mas </button>
          }
        </>
        : <>
          <input
            type="text"
            name={name}
            value={value}
            className={`${styles.input} ${styles.medium}`}
            onChange={handleChange}
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
