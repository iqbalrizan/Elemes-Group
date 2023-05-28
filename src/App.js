import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSectionMobile from './components/HeroSection/HeroSectionMobile';
import Category from './components/Category/Category';
import Trending from "./components/Trending/Trending"
import HeroSection from './components/HeroSection/HeroSectionDesktop';
import HeroSectionDesktop from './components/HeroSection/HeroSectionDesktop';
import StickyMenu from './components/StickyMenu/StickyMenu';
import Footer from "./components/Footer/Footer"



function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      {window.innerWidth < 600 ? <HeroSectionMobile /> : <HeroSectionDesktop/>}
      
      <Category />
      <Trending />
      {window.innerWidth < 600 ? <StickyMenu /> : <Footer />}

     <div className="content">
        <p>© 2021 Elemes id. All rights reserved</p>
        <br />
        
      </div> 
     
    </div>
  );
}

export default App;
