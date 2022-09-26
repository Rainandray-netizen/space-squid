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
      <article className="portfolio-section">
        <h2>Our Projects</h2>
        <p>{description}</p>
        <article>
          <Swiper
            className="mySwiper"
            slidesPerView={swiperSlides}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <PortfolioTile project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </article>
    </Element>
  );
};

export default Portfolio;
