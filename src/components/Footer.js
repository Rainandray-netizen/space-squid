import React from 'react'

//Logo
import Logo from '../assets/logos/space-squid-logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-container">
          <img id="logo" src={Logo} alt="space-squid-logo" />
          <div className="footer-links">
            <p>info@spacesquidcreative.com</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <p>© Space Squid Creative Tech 2022</p>
            <p>All rights reserved</p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer