import React from 'react';
import Nav from './Nav';

const Header = ({ toggleyOverflow, setyOverflow }) => {
  return (
    <>
      <Nav toggleyOverflow={toggleyOverflow} setyOverflow={setyOverflow} />
    </>
  );
};

export default Header;
