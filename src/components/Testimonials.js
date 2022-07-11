import React from 'react'

import TestimonialTile from './TestimonialTile'

const Testimonials = ({ testimonials }) => {
  return (
    <article className="testimonial-section">
      <h2>What Our Clients Say</h2>
      {testimonials.map((testimonial) =>
        <TestimonialTile key={testimonial.id} testimonial={testimonial} />
      )}
    </article>
  )
}

export default Testimonials