import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import styles from './ToogleRoom.module.scss'

interface Props {
  setShowPrivate: Dispatch<SetStateAction<boolean>>
}

const LABELS = ['Públicas', 'Privadas']

const ToogleRoom: React.FC<Props> = ({ setShowPrivate }) => {
  const [active, setActive] = useState(LABELS[0])

  useEffect(() => {
    active === LABELS[0] ? setShowPrivate(false) : setShowPrivate(true)
  }, [active])

  return (
    <section className={styles['toogle-buttoms']}>
      {LABELS.map(label => (
        <React.Fragment key={label}>
          <input
            className={styles['radio-input']}
            type='radio'
            value={label}
            name='options'
            checked={active === label}
            readOnly
          />
          <label
            className={`${styles['radio-label']} ${active === label && styles.active}`}
            htmlFor='public'
            onClick={() => setActive(label)}
          >
            {label}
          </label>
        </React.Fragment>
      ))}
    </section>
  )
}

export default ToogleRoom
