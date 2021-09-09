import React from 'react'

import styles from './Card.module.scss'

interface Props {
  title?: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ title, subtitle, className, children }) => {
  return (
    <div className={`${styles.card} ${className ?? ''}`}>
      {title && <p className={styles.title}>{title}</p>}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {children}
    </div>
  )
}

export default Card
