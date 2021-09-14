import React from 'react'

import styles from './ProgressBar.module.scss'

const ProgressBar = () => {
  const [timer, setProgress] = React.useState(0)
  const timerRef = React.useRef<number>()

  const getInterval = () => {
    const progressInterval = window.setInterval(() => {
      setProgress(timer + 1)
    }, 100)
    return progressInterval
  }

  React.useEffect(() => {
    timerRef.current = getInterval()
    if (timer === 100) window.clearInterval(timerRef.current)
    return () => window.clearInterval(timerRef.current)
  }, [timer])

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{ width: `${timer}%` }}/>
    </div>
  )
}

export default ProgressBar
