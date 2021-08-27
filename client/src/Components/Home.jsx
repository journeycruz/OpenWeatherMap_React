import React from 'react';

const Home = () => {
   return (
      <div>
         <video className='videoTag' autoPlay loop muted>
            <source src='../assets/home_bg.mp4' type='video/mp4' />
         </video>
         <div className="container col-md-7 text-center">
            <div className='header'>
               <h2>Weather Forecast</h2>
            </div>
            <br />
            <div className="instructions">
               <p>Enter a city name below to get the current weather conditions for that area.</p>
            </div>
            <div className='cityInput'>
               <form method='POST' action='/search-location'>
                  <input type='text' placeholder='Enter city..' name='city'/>
                  <button>ENTER</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Home;