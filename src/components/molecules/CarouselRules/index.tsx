import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { DATA } from './data'
import s from './Carousel.module.scss'

import '../../../styles/index.scss'

const CarouselRules = () => {
  return (
    <>
      <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows>
        {
          DATA.map((item) => (
            <div key={item.id} className={s.slide}>
              <img className={s.image} src={item.img} alt=""/>
              <h1 className={s.title}>{item.title} </h1>
              <h4 className={s.description}>{item.description} </h4>
            </div>
          ))
        }
      </Carousel>
    </>
  )
}

export default CarouselRules
