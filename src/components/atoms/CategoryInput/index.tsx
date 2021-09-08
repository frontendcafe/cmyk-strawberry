import React from 'react'
import styles from './CategoryInput.module.scss'

export interface Props {
  title: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryInput: React.FC<Props> = ({ title, value, handleInputChange }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        name={title}
        onChange={ handleInputChange }
      />
    </div>
  )
}

export default CategoryInput
