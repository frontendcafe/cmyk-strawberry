import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'
import avatar3 from './assets/avatar3.svg'
import avatar4 from './assets/avatar4.svg'
import avatar5 from './assets/avatar5.svg'

const Avatar = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5
]
const Aleatorio = Math.floor(Math.random() * Avatar.length)

export default Avatar[Aleatorio]
