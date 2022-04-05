import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { EffectCards } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Alexander helped us to design an app and working with him was a very positive experience. We would like to recommend him!'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiors.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
      <Swiper
                          // install Swiper modules
                          modules={[Pagination, EffectCards]}
                          spaceBetween={40}
                          slidesPerView={'auto'}
                          effect={'cards'}
                          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              
              <SwiperSlide>
                      <div key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
                </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials