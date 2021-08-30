import React from "react";
import { Jumbotron } from "reactstrap";
import { Animated } from "react-animated-css";

const Hero = () => {
  return (
    <div id='home' className='vid-container m-0'>
      <div className='justify-content-center m-0 text-center'>
        <Jumbotron>
          <video className='videoTag' autoPlay loop muted playsinLine>
            <source src='./assets/sunny-weather.mp4' type='video/mp4' />
          </video>
          <Animated animationIn='fadeIn' isVisible='true'>
            <div className='container hero col-md-6 m-0'>
              <div className='header'>
                <h2 className='welcome display-5'>Current Weather</h2>
              </div>
              <br />
              <div className='lead instructions'>
                <p>
                  Search any city below to get the current weather conditions
                  for that area.
                </p>
              </div>
              <div className='cityInput'>
                <form method='POST' action='/search-location'>
                  <div class='input-container ic1'>
                    <input
                      name='city'
                      class='input'
                      type='text'
                      placeholder=' '
                    />
                    <div class='cut'></div>
                    <label for='city' class='placeholder'>
                      City Name
                    </label>
                  </div>
                  <button type='text' class='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </Animated>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Hero;
