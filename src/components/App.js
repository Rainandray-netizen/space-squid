import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'


import data from '../data/content'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services services={data.services}/>
      Squids!
      <Footer />
    </>
  );
}

export default App;
