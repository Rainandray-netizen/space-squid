import React from 'react';
import '../sass/main.scss';

import data from '../data/content'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'
import ChooseUs from './ChooseUs'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'

function App() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Hero />
        <Services services={data.services} />
        <ChooseUs chooseUs={data.chooseUs} />
        <Portfolio portfolio={data.portfolio} />
        <Testimonials testimonials={data.testimonials} />
        <ContactUs contactUs={data.contactUs}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
