import React from "react";

const TestimonialTile = ({testimonial}) => {
  const {body, person} = testimonial
  return(
    <div>
      <p>{body}</p>
      <p>{person}</p>
    </div>
  )
}

export default TestimonialTile