import React from 'react';

const Hero = ({ hero }) => {
  const { body, backgroundImage, logoImage, backgroundAlt, logoAlt } = hero;

  return (
    <section className="hero-banner">
      <div className="hero-text">
        <h1>
          Welcome to<br></br>
          <span className="space-squid-creative">Space Squid Creative</span>
        </h1>
        <p>{body}</p>
      </div>
      <div className="space-squid-image">
        <img id="space-bubble" src={backgroundImage} alt={backgroundAlt} />
        <img
          id="space-squid"
          className="floating"
          src={logoImage}
          alt={logoAlt}
        />
      </div>
    </section>
  );
};

export default Hero;
