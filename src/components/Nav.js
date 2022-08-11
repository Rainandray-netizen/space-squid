import React from 'react';
import { Link } from 'react-scroll';
//Logo
import Logo from '../assets/logos/space-squid-logo-black.png';

import HamburgerMenu from './HamburgerMenu';

const Nav = ({ toggleyOverflow, setyOverflow }) => {
  return (
    <>
      <nav>
        <section className="nav-container">
          <img id="logo" src={Logo} alt="space-squid-logo" />
          <div className="nav-links">
            <ul>
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="portfolio">Portfolio</Link>
              </li>
              <Link to="contact-us" offset={-50}>
                <button to="contact-us">Contact Us</button>
              </Link>
            </ul>
          </div>
          <HamburgerMenu
            toggleyOverflow={toggleyOverflow}
            setyOverflow={setyOverflow}
          />
        </section>
      </nav>
    </>
  );
};

export default Nav;
