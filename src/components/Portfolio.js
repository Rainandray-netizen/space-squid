import React from 'react'
import PortfolioTile from './PortfolioTile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Portfolio = ({ portfolio }) => {

  return (
    <article className="portfolio-section">
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <article>
        <Swiper 
          className='mySwiper'
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
        >
          {portfolio.map((project) =>
            <SwiperSlide>
              <PortfolioTile key={project.id} project={project} />
            </SwiperSlide>
          )}
        </Swiper>
      </article>
    </article>
  )
}

export default Portfolio