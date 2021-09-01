import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

interface Props {
  initialPoint?: number;
  toNumber: number;
  handleEndCount: () => void;
}

function Countdown ({ initialPoint, toNumber, handleEndCount }: Props) {
  const [count, setCount] = useState(initialPoint ?? 0)
  const isValid = useRef<number>()
  let interval: number

  const updateCount = () => {
    if (count > toNumber) setCount(prevCount => prevCount - 1)
    else setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    // I have to use a ref to use that value into interval, useState not work in it
    isValid.current = count
  }, [count])

  useEffect(() => {
    interval = setInterval(() => {
      if (isValid.current === toNumber) {
        clearInterval(interval)
        handleEndCount()
      } else {
        updateCount()
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.countdown}>
      {count}
    </div>
  )
}

export default Countdown
