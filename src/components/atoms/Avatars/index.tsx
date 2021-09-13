import React, { useState, useEffect } from 'react'

import avatar1 from './assets/avatar1.svg'

import avatar2 from './assets/avatar2.svg'

import avatar3 from './assets/avatar3.svg'

import avatar4 from './assets/avatar4.svg'

import avatar5 from './assets/avatar5.svg'

interface AvatarProps {
  index?: number;
  toggle?: boolean;
}

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

const getRandom = () => Math.floor(Math.random() * avatars.length)

function Avatar ({ index, toggle }: AvatarProps): any {
  const [random, setRandom] = useState(getRandom())

  useEffect(() => {
    let newRandom = getRandom()

    while (newRandom === random) {
      newRandom = getRandom()
    }
    setRandom(newRandom)
  }, [toggle])

  const currentindex = index || random

  return <img src={avatars[currentindex]} alt="perfil" width="300 px"/>
}

export default Avatar
