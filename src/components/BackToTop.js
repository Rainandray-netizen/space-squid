import React, { useEffect, useState } from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

const BackToTopButton = () => {
  let { x, y } = useWindowScrollPosition();

  const [styles, setStyles] = useState({ display: 'none' });

  useEffect(() => {
    let tempStyles = { ...styles };
    //show or don't show
    if (y >= 100) {
      tempStyles = { ...styles, display: 'block' };
    } else {
      tempStyles = { ...styles, display: 'none' };
    }

    tempStyles = { ...tempStyles, opacity: (y - 100) / 800 };

    setStyles(tempStyles);
  }, [y]);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log(window);
  return (
    <div className="back-to-top">
      <button style={styles} onClick={handleBackToTop}>
        ^
      </button>
    </div>
  );
};

export default BackToTopButton;
