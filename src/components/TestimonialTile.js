import React from "react";

const TestimonialTile = ({ testimonial }) => {
  const { body, person } = testimonial
  return (
    <article>
      <p className="testimonial-text">"{body}"</p>
      <p className="testimonial-name">- {person}</p>
    </article>
  )
}

export default TestimonialTile