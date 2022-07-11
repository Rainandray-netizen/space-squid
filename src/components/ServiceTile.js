import React from 'react'

const ServiceTile = ({ service }) => {

  const { image, subtitle, body, alt } = service

  return (
    <div className="service-tile">
      <img alt={alt} src={image} />
      <h3>{subtitle}</h3>
      <p>{body}</p>
    </div>
  )
}

export default ServiceTile