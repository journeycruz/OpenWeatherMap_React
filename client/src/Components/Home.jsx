import React from 'react';

const Home = () => {

   return (
      <div>
         <div className='header'>
            <h2>Weather Forecast</h2>
         </div>

         <div className="instructions">
            <p>Enter a US zip code below to get the current weather conditions for that area.</p>
         </div>

         <div className='zipcodeInput'>
	  <form method='POST' action='/search-location'>
	     <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default Home;