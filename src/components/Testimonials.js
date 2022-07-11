import React from 'react'

import TestimonialTile from './TestimonialTile'

const Testimonials = ({testimonials}) => {
  return(
    <div>
      {testimonials.map((testimonial)=>
        <TestimonialTile key={testimonial.id} testimonial={testimonial}/>
      )}
    </div>
  )
}

export default Testimonials