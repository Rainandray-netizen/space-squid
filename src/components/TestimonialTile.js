import React from "react";

const TestimonialTile = ({ testimonial }) => {
  const { body, person } = testimonial
  return (
    <article className="testimonial-tile-container">
      <div className="testimonial-tile">
        <p className="testimonial-text">"{body}"</p>
        <p className="testimonial-name">- {person}</p>
      </div>
    </article>
  )
}

export default TestimonialTile