import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './App.css';
import Header from './components/Header/header';
// import Social from './components/Home/social';
import Home from './components/Home/home';
import About from './components/About/about';
import Skill from './components/Skill/skill';
import Qualification from './components/Qualification/qualification';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
// import "leaflet/dist/leaflet.css";

// import reportWebVitals from './reportWebVitals';

const App = () => {
  
  //  document.designMode="on";

      
  return (
    <> 
     <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skill/>
    <Qualification/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    {/* <Social/> */}
    </main>
    </>
  );
}

export default App;
