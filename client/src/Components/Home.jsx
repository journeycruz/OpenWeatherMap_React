import React from 'react';

const Home = () => {

   return (
      <div className="container col-md-8 text-center">
         <div className='header'>
            <h2>Weather Forecast</h2>
         </div>
         <br />
         <div className="instructions">
            <p>Enter a US zip code below to get the current weather conditions for that area.</p>
         </div>

         <div className='cityInput'>
	  <form method='POST' action='/search-location'>
	     <input type='text' placeholder='Enter city..' name='city'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default Home;