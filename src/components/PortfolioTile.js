import React from 'react'

const PortfolioTile = ({ project }) => {
  const { image, alt } = project

  return (
    <div className="portfolio-tile">
      <img src={image} alt={alt} />
    </div>
  )
}

export default PortfolioTile