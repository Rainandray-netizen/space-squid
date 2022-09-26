import React, { useEffect, useState } from 'react';
import PortfolioTile from './PortfolioTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Element } from 'react-scroll';

import 'swiper/css';
import 'swiper/css/navigation';

const Portfolio = ({ portfolio }) => {
  const { description, projects } = portfolio;

  const { height, width } = useWindowDimensions();

  //set the number of panels to show in the carousel based on window size
  const [swiperSlides, setSwiperSlides] = useState(null);

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    return setExpanded(!expanded);
  };

  useEffect(() => {
    let slides = 0;
    if (width >= 1200) {
      slides = 3;
    } else if (width >= 768) {
      slides = 2;
    } else {
      slides = 1;
    }
    setSwiperSlides(slides);
  }, [width]);

  return (
    <Element name="portfolio">
      <article className="projects-section">
        <h2>Our Projects</h2>
        <p>{description}</p>
        <button onClick={toggleExpanded}>
          {expanded ? <span>Hide Projects</span> : <span>Show Projects</span>}
        </button>
        {expanded ? (
          <article>
            <section className="projects-grid">
              {projects.map((project) => (
                <PortfolioTile project={project} />
              ))}
            </section>
          </article>
        ) : null}
      </article>
    </Element >
  );
};

export default Portfolio;
