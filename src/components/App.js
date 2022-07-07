import React from 'react'

import data from '../data/content'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'
import ChooseUs from './ChooseUs'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services services={data.services}/>
      <ChooseUs />
      <Portfolio portfolio={data.portfolio}/>
      <Testimonials testimonials={data.testimonials}/>
      <Footer />
    </>
  );
}

export default App;
