import React, { useState } from 'react'

import styles from './ToogleRoom.module.scss'

const LABELS = ['Públicas', 'Privadas']

const ToogleRoom: React.FC = () => {
  const [active, setActive] = useState(LABELS[0])

  return (
    <section className={styles['toogle-buttoms']}>
      {LABELS.map(label => (
        <>
          <input
            className={styles['radio-input']}
            type='radio'
            value={label}
            name='options'
            checked={active === label}
          />
          <label
            className={`${styles['radio-label']} ${active === label && styles.active}`}
            htmlFor='public'
            onClick={() => setActive(label)}
          >
            {label}
          </label>
        </>
      ))}
    </section>
  )
}

export default ToogleRoom
