import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useHistory } from 'react-router'
import { paths } from '../../../routes'
import Layout from '../../templates/Layout'

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

  const history = useHistory()

  const renderTime = ({ remainingTime }: { remainingTime: number }) => (
    <span className={styles.count}>
      {remainingTime}
    </span>
  )

  return (
    <Layout
      title="La ronda comienza en"
      subTitle=""
      onClose={() => history.push(paths.HOME)}
    >
      <div className={`${styles.wrapper} ${className}`}>
        <CountdownCircleTimer
          colors={[[linecolor, 0.33]]}
          duration={duration}
          onComplete={handleEnd}
          size={size ?? defaultsize}
          strokeLinecap={strokelinecap}
          strokeWidth={strokewidth}
          trailColor={trailcolor}
          isPlaying
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </Layout>
  )
}

export default Countdown
