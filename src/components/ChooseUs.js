import React from 'react';

const ChooseUs = ({ chooseUs }) => {
  const { header, body, cta } = chooseUs;

  return (
    <article className="choose-us-section">
      <h2>{header}</h2>
      <p>{body}</p>
      <button>{cta}</button>
    </article>
  );
};

export default ChooseUs;
