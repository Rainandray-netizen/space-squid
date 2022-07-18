import React from 'react'

import TestimonialTile from './TestimonialTile'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = ({ testimonials }) => {
  return (
    <article className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Carousel autoPlay={true} infiniteLoop={true} interval={6000}>
        {testimonials.map((testimonial) =>
          <TestimonialTile key={testimonial.id} testimonial={testimonial} />
        )}
      </Carousel>
    </article>
  )
}

export default Testimonials