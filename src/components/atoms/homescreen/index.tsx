import React, { useState } from 'react'
import Logotype1 from './../Logotype/Index'
import { Button } from './../Button/index'
import './assets/index.scss'
import Vector from './assets/Vector.svg'
import Subtract from './assets/Subtract.svg'
import Input from './../input/index'
import Avatar from './../Avatars/index'
import { Link } from 'react-router-dom'

function Home () {
  const [toggleAvatar, setToggleAvatar] = useState(false)

  return (
    <div className="background">
      <div className="content">
        <Button className="subtract" theme="tertiary" size="small" type="button" onClick={console.log}><img src={Subtract} alt=""/></Button>
        <div className="title">

          <Logotype1/>

        </div>
        <main>
          <Button className="vector" theme="tertiary" size="small" type="reset" onClick={() => setToggleAvatar(!toggleAvatar)}>
            <img src={Vector} alt="logo"/>
          </Button>
          <div className="avatar-container">
            <Avatar toggle={toggleAvatar}/>
            <div className="input"><Input addButton={false} changeHandler={console.log} size="small-size"/>

              <div className="buttons">

                <Button type="button" size="large" theme="primary" onClick={console.log}>Crear partida</Button>

                <Button type="button" size="large" theme="tertiary" onClick={console.log}>Buscar partida</Button>
              </div>
            </div>
          </div>

        </main>
      </div>
      <footer className="footer">
        <Link to='/about/:number'>Sobre nosotros</Link>
      </footer>
    </div>

  )
}

export default Home
