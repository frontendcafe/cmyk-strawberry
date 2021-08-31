import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

interface Props {
  initialPoint?: number;
  toNumber: number;
  handleEndCount: () => void;
}

const initialOffset = 440

function Countdown ({ initialPoint, toNumber, handleEndCount }: Props) {
  const [count, setCount] = useState(initialPoint ?? 0)
  const isValid = useRef<number>()
  let interval: number

  const updateCount = () => {
    if (count > toNumber) setCount(prevCount => prevCount - 1)
    else setCount(prevCount => prevCount + 1)
  }

  function calculateTimeFraction () {
    const rawTimeFraction = count / toNumber
    return rawTimeFraction - (1 / toNumber) * (1 - rawTimeFraction)
  }

  const circleDasharray = `${(
    calculateTimeFraction() * 283
  ).toFixed(0)} 283`

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
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <circle
            id="circle"
            className={styles.circle}
            r="69.85699"
            cy="81"
            cx="81"
            strokeWidth="8"
            stroke="#6fdb6f"
            fill="none"
            style={{
              strokeDashoffset: circleDasharray
            }}
          />
        </g>
      </svg>
    </div>
  )
}

export default Countdown
