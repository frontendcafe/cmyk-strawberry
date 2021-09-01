import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styles from './Countdown.module.scss'

interface Props {
  duration: number
  handleEnd: () => void
  className?: string
  size?: number
}

const Countdown: React.FC<Props> = ({ size, duration, handleEnd, className }) => {
  const {
    defaultsize,
    strokewidth,
    strokelinecap,
    linecolor,
    trailcolor
  } = styles

  const renderTime = ({ remainingTime }: { remainingTime: number }) => (
    <span className={styles.count}>
      {remainingTime}
    </span>
  )

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <CountdownCircleTimer
        isPlaying
        onComplete={handleEnd}
        duration={duration}
        size={size ?? defaultsize}
        strokeWidth={strokewidth}
        strokeLinecap={strokelinecap}
        trailColor={trailcolor}
        colors={[[linecolor, 0.33]]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Countdown
