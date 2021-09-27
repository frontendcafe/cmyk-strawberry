import React from 'react'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ duration = 5, onComplete = () => {} }) => {
  const [timer, setProgress] = React.useState(0)
  const timerRef = React.useRef<number>()

  const getInterval = () => {
    const progressInterval = window.setInterval(() => {
      setProgress(timer + 1)
    }, duration * 10)
    return progressInterval
  }

  React.useEffect(() => {
    timerRef.current = getInterval()
    if (timer === 100) {
      window.clearInterval(timerRef.current)
      onComplete()
    }
    return () => window.clearInterval(timerRef.current)
  }, [timer])

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{ width: `${timer}%` }}/>
    </div>
  )
}

export default ProgressBar
