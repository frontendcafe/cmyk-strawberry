import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

import styles from './Slider.module.scss'

interface Props {
  min?: number
  max?: number
  step?: number
}

const Slider: React.FC<Props> = ({ min = 30, max = 90, step = 10 }) => {
  const [values, setValues] = useState([min])
  const labels = [30, 40, 50, 60, 70, 80, 90]

  return (
    <div className={styles.container}>
      <header className={styles.header}><h3>Segundos</h3></header>
      <section className={styles.labels}>
        {labels.map(label => {
          return (
            <span
              key={label}
              className={`${styles.label} ${label === values[0] && styles.active}`}
            >
              {label}
            </span>
          )
        })}
      </section>
      <div className={styles.slider}>
        <Range
          values={values}
          step={step}
          min={min}
          max={max}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className={styles.track}
              style={{
                ...props.style
              }}
            >
              <div
                ref={props.ref}
                className={styles.progress}
                style={{
                  background: getTrackBackground({
                    values: values,
                    colors: [styles['primary-color'], styles['neutral-color']],
                    min: min,
                    max: max
                  })
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className={styles.thumb}
            >
              <div/>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Slider
