import React from 'react'
import { CATEGORY_STATUS } from '../../../hooks/useCategories/constants'
import styles from './Category.module.scss'

export interface Props {
  type: CATEGORY_STATUS;
  label: string;
  onClick?: () => void;
}

export const Category: React.FC<Props> = ({ type = 'uncheck', label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles[type]}
      type="button"
    >
      {label}
    </button>

  )
}
