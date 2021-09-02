import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

interface Props {
  type: 'submit' | 'reset' | 'button';
  theme: 'default' | 'rounded';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ type = 'button', onClick, children, theme, size, className, disabled }) => {
  const classProps: string = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled
    },
    className
  )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  )
}
