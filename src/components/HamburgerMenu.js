// Mobile Menu

import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = ({ toggleyOverflow }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    console.log('menu clicked');
    setMenuToggle(!menuToggle);
    toggleyOverflow();
  };

  return (
    <>
      <div
        className={menuToggle ? 'hamburger-menu showMenu' : 'hamburger-menu'}
      >
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <Link to="contact-us" offset={-50}>
            <button to="contact-us">Contact Us</button>
          </Link>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {/* <FontAwesomeIcon className="menu-icon" icon={faBars} />
        <FontAwesomeIcon className="close-icon displayNone" icon={faXmark} /> */}
        <FontAwesomeIcon
          className={menuToggle ? 'menu-icon displayNone' : 'menu-icon'}
          icon={faBars}
        />
        <FontAwesomeIcon
          className={menuToggle ? 'close-icon' : 'close-icon displayNone'}
          icon={faXmark}
        />
      </button>
    </>
  );
};

export default HamburgerMenu;
