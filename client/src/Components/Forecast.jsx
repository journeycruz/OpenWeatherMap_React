import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forecast extends Component {
	constructor(props) {
		super(props);

		   this.state = ({
		      isLoading: true,
		      currentTemp: '',
		      cityName: '',
		      cityNotFound: ''
		   })
	}

	componentDidMount() {
		fetch('/search-location-weather')
		.then(res => res.json())
		.then(data => {
			if(data.data.cod === '404') {
				this.setState({
					isLoading: false,
					cityNotFound: '404'
				})
			} else {
			     this.setState({
			        isLoading: false,
			        currentTemp: Math.round(data.data.main.temp) + '°',
					tomorrowTemp: data.data.main[1].temp,
			        cityName: data.data.name
			     });
			}
		})
		.catch(err => {
		   console.log(err);
		})	
	}

	render() {
		const WeatherCardError = (
		   <div className='weatherCardContainer'>
		     <div className='weatherCardError'>
		           <p> Whoa! Looks like there was an error with your zipcode.</p>
		        <Link to='/'><button>Try Again</button></Link>
		     </div>
		   </div>
		)

		const WeatherConditions = (
			this.state.cityNotFound === 404 ? <div> { WeatherCardError } </div> :
			<div>
			   <div className='homeBtn'>
				     <Link to='/'><button>Home</button></Link>
			   </div>
			   <div className='weatherCardContainer'>
			      <div className='weatherCard'>
				   <div className='conditionsOverview'>
				      <p>{this.state.currentTemp}</p>
				   </div>
				   <div className='conditionDetails'>
				      <p>Tomorrow's Forecast: {this.state.tomorrowTemp} </p>
				   </div>
			      </div> 
			     <h4> Location | {this.state.cityName} </h4>
			   </div>
			</div>
		)

		const CurrentWeatherCard = ( 
           <div> {WeatherConditions} </div>
        )

		return (
		   <div>
	             {CurrentWeatherCard}
		   </div>
		)
	}
}

export default Forecast;