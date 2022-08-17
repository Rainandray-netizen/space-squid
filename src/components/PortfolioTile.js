import React from 'react';

const PortfolioTile = ({ project }) => {
  const { image, alt, url } = project;

  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <div className="portfolio-tile">
        <img src={image} alt={alt} />
      </div>
    </a>
  );
};

export default PortfolioTile;
