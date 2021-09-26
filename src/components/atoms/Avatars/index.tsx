import React from 'react'
import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'
import avatar3 from './assets/avatar3.svg'
import avatar4 from './assets/avatar4.svg'
import avatar5 from './assets/avatar5.svg'

import './assets/index.scss'

interface AvatarProps {
  index?: number;
  toggle?: boolean;
}

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

function Avatar ({ index = 0 }: AvatarProps): any {
  return <img src={avatars[index]} alt="perfil" className="avatar"/>
}

export default Avatar
