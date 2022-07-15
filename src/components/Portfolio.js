import React from 'react'
import PortfolioTile from './PortfolioTile'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Portfolio = ({ portfolio }) => {

  return (
    <article className="portfolio-section">
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <article>
        <Carousel autoPlay={true} infiniteLoop={true} interval={6000}>
          {portfolio.map((project) =>
            <PortfolioTile key={project.id} project={project} />
          )}
        </Carousel>
      </article>

    </article>
  )
}

export default Portfolio