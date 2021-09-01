import React from 'react'
import styles from './Category.module.scss'

interface Props {
  type: string;
  label: string;
  onClick: () => void;
}

export const Category: React.FC<Props> = ({ type = 'uncheck', label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles[type]}
    >
      {label}
    </button>

  )
}
