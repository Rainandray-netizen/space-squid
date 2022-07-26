import React from 'react';

//Logo
import Logo from '../assets/logos/space-squid-logo-black.png';

const Nav = () => {
  return (
    <>
      <nav>
        <section className="nav-container">
          <img id="logo" src={Logo} alt="space-squid-logo" />
          <div className="nav-links">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <button>Contact Us</button>
            </ul>
            {/* Mobile Menu goes here */}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nav;
