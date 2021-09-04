import React, { useState } from 'react'
import styles from './Slider.module.scss'

interface Props {
  min?: string
  max?: string
  className?: string
}

const Slider: React.FC<Props> = ({ min = 30, max = 90 }) => {
  const [value, setValue] = useState(min)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}><h3>Segundos</h3></header>
      <div className={styles.slider}>
        <input
          className={styles.input}
          type='range'
          min={min}
          max={max}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}

export default Slider
