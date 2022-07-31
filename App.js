import React from 'react'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Newsletter from './components/Newsletter';
import Analytics from './components/Analytics'
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      
     
    </div>
  );
}

export default App;
