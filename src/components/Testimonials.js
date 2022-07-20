import React from 'react'

import TestimonialTile from './TestimonialTile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const Testimonials = ({ testimonials }) => {
  return (
    <article className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Navigation]}
        navigation={true}
      >
        {testimonials.map((testimonial) =>
          <SwiperSlide>
            <TestimonialTile key={testimonial.id} testimonial={testimonial} />
          </SwiperSlide>
        )}
      </Swiper>
    </article>
  )
}

export default Testimonials