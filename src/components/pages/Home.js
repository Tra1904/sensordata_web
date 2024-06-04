// File Home.js
import React from 'react';
// import HeroSection from '../HeroSection';

function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* <HeroSection /> */}
      <iframe
        src="http://192.168.1.103:8000/"
        title="Data"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'none' }}
      />
    </div>

  );

}

export default Home;
