import React from 'react';
import { Element } from 'react-scroll';

import ServiceTile from './ServiceTile';

const Services = ({ services }) => {
  return (
    <Element name="services">
      <article className="services-section">
        <h2>What We Do</h2>
        <section className="services-grid">
          {services.map((service) => (
            <ServiceTile service={service} key={service.id} />
          ))}
        </section>
      </article>
    </Element>
  );
};

export default Services;
