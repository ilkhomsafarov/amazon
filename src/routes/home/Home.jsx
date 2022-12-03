import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import TinyCarousel from '../../components/tinyCarousel/TinyCarousel';
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Main/>
      <TinyCarousel/>
    </div>
  )
}

export default Home