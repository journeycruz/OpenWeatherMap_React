import React from 'react';

import Navigation from '../Components/Navbar';
import Hero from '../Components/Jumbotron';
import About from '../Components/About';

const Home = () => {
   return (
      <div className='col-md-12'>
         <Navigation />
         <div className="row m-0">
            <Hero />
         </div>
         <br id="features"/>
         <br />
         <div className="row m-0">
            <About />
         </div>
      </div>
   )
}

export default Home;