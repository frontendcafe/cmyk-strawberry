import React from 'react'
import './style.scss'

interface Props {
  type: string;
  label: string;
  onClick: () => void;
}

// type Props = {
//   label: string;
//   type: 'error' | 'warning' | 'success';
//   onChange: () => void;
// }

// const types = ['Child', 'Infant', 'Grandchild', 'Cousin']

export const Category: React.FC<Props> = ({ type = 'uncheck', label, onClick }) => {
  return (
    <button
      onClick={ onClick }
      className={ type }
    >
      { label }
    </button>
  )
}
