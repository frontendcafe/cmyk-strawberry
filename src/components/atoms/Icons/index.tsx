import React from 'react'
import styles from './Icon.module.scss'
import linkedin from '../../../assets/icon-network/linkedin.svg'
import github from '../../../assets/icon-network/github.svg'
import twitter from '../../../assets/icon-network/twitter.svg'
import dribbble from '../../../assets/icon-network/dribbble.svg'
interface Props {
    variante: 'linkedin' | 'github' | 'twitter' |'dribbble'
  }

function Icon ({ variante }:Props) {
  const imgIcon = { linkedin, github, twitter, dribbble }

  return (
    <div className={styles.container}>
      <a href='!#'>
        <img src={imgIcon[variante]} alt='Logo'/>
      </a>
    </div>
  )
}
export default Icon
