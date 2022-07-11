import React from 'react'

import ServiceTile from './ServiceTile'

const Services = ({ services }) => {
  console.log(services)
  return (
    <>
      <article className="services-section page-container">
        <h2>Services We Provide</h2>
        <section className="services-grid">
          {services.map((service) =>
            <ServiceTile service={service} key={service.id} />
          )}
        </section>

      </article>
    </>
  )
}

export default Services