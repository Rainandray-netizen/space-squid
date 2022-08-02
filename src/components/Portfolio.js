import React, { useEffect, useState } from 'react';
import PortfolioTile from './PortfolioTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import useWindowDimensions from '../hooks/useWindowDimensions';

import 'swiper/css';
import 'swiper/css/navigation';

const Portfolio = ({ portfolio }) => {
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
    <article id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <article>
        <Swiper
          className="mySwiper"
          slidesPerView={swiperSlides}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
        >
          {portfolio.map((project) => (
            <SwiperSlide key={project.id}>
              <PortfolioTile project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </article>
  );
};

export default Portfolio;
