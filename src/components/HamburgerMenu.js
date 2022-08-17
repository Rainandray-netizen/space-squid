// Mobile Menu

import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { wait } from '@testing-library/user-event/dist/utils';

const HamburgerMenu = ({ toggleyOverflow, setyOverflow }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    toggleyOverflow();

    setMenuToggle(!menuToggle);
  };

  const handleLinkClick = (element) => {
    setyOverflow(true);
    //lord forgive me for this
    wait(1).then(() => {
      try {
        scroller.scrollTo(element);
      } catch (error) {
        console.log(error);
      }
    });
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="mobile-menu-container">
      <div
        className={menuToggle ? 'hamburger-menu showMenu' : 'hamburger-menu'}
      >
        <ul>
          <li
            onClick={() => {
              handleLinkClick('about');
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              handleLinkClick('services');
            }}
          >
            Services
          </li>
          <li
            onClick={() => {
              handleLinkClick('portfolio');
            }}
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              handleLinkClick('portfolio');
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon
          className={menuToggle ? 'menu-icon displayNone' : 'menu-icon'}
          icon={faBars}
        />
        <FontAwesomeIcon
          className={menuToggle ? 'close-icon' : 'close-icon displayNone'}
          icon={faXmark}
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
