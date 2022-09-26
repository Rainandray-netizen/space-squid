import React from 'react';
import { Link, Element } from 'react-scroll';

import Dev1 from '../assets/images/floating_dev_man.svg';
import Dev2 from '../assets/images/floating_dev_woman.svg';

const ChooseUs = ({ chooseUs }) => {
  const { header, body, cta } = chooseUs;

  return (
    <Element name="about">
      <article className="choose-us-section">
        <div className="choose-us-info">
          <img className="floating" src={Dev1} alt="floating-developer" />
          <div>
            <h2>{header}</h2>
            <p>{body}</p>
            <Link to="contact-us" offset={-50}>
              <button>{cta}</button>
            </Link>
          </div>
          <img className="reversefloating" src={Dev2} alt="floating-developer" />
        </div>
      </article>
    </Element >
  );
};

export default ChooseUs;
