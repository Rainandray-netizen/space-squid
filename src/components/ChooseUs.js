import React from 'react';
import { Link, Element } from 'react-scroll';

const ChooseUs = ({ chooseUs }) => {
  const { header, body, cta } = chooseUs;

  return (
    <Element name="about">
      <article className="choose-us-section">
        <h2>{header}</h2>
        <p>{body}</p>
        <Link to="contact-us" offset={-50}>
          <button>{cta}</button>
        </Link>
      </article>
    </Element>
  );
};

export default ChooseUs;
