import React from 'react';
import Nav from './Nav';

const Header = ({ toggleyOverflow }) => {
  return (
    <>
      <Nav toggleyOverflow={toggleyOverflow} />
    </>
  );
};

export default Header;
