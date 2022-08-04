import React, { useState } from 'react';
import '../sass/main.scss';

import data from '../data/content';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Footer from './Footer';
import ChooseUs from './ChooseUs';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import BackToTopButton from './BackToTop';

function App() {
  const [yOverflow, setyOverflow] = useState(true);
  const toggleyOverflow = () => {
    setyOverflow(!yOverflow);
  };

  return (
    <div className={yOverflow ? '' : 'hideOverflow'}>
      <Header toggleyOverflow={toggleyOverflow} setyOverflow={setyOverflow} />
      <main className="page-container">
        <Hero hero={data.hero} />
        <Services services={data.services} />
        <ChooseUs chooseUs={data.chooseUs} />
        <Portfolio portfolio={data.portfolio} />
        <Testimonials testimonials={data.testimonials} />
        <ContactUs contactUs={data.contactUs} />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
