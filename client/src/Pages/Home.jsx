import React from "react";

import Navigation from "../Components/Navbar";
import Hero from "../Components/Jumbotron";
// import About from "../Components/About";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className='col-md-12'>
      <Navigation />
      <div className='row m-0'>
        <Hero />
      </div>
      {/* <br />
      <br />
      <div className='row m-0' id='features'>
        <div className='col-md-2'></div>
        <div className='col-md-8 text-center justify-content-center'>
        </div>
        <div className='col-md-2'></div>
      </div>
      <br />
      <br /> */}
      <div className='row m-0 footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
