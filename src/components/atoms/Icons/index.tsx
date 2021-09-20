import React from 'react'
import styles from './Icon.module.scss'
import linkedin from '../../../assets/icon-network/linkedin.svg'
import github from '../../../assets/icon-network/github.svg'
import twitter from '../../../assets/icon-network/twitter.svg'
import dribbble from '../../../assets/icon-network/dribbble.svg'
import figma from '../../../assets/icon-network/figma.svg'
import web from '../../../assets/icon-network/web.svg'
interface Props {
    variante: 'linkedin' | 'github' | 'twitter' |'dribbble' | 'figma' | 'web'
  }

function Icon ({ variante }:Props) {
  const imgIcon = { linkedin, github, twitter, dribbble, figma, web }

  return (
    <div className={styles.container}>
      <img src={imgIcon[variante]} alt='Logo'/>
    </div>
  )
}
export default Icon
