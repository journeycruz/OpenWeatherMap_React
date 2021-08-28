import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import ErrorPage from './Error';
import { Loader } from '../Components/Loader';

class CurrentWeather extends Component {
	constructor(props) {
		super(props);

		   this.state = ({
		      isLoading: true,
		      currentTemp: '',
		      humidity: '',
		      wind: '',
		      windDirection: '',
		      currentCondition: '',
		      currentConditionDescription: '',
		      weatherIcon: '',
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
			        humidity: data.data.main.humidity + '%',
			        wind: Math.round(data.data.wind.speed) + ' mph',
			        windDirection: data.data.wind.deg,
			        currentCondition: data.data.weather[0].main,
			        currentConditionDescription: data.data.weather[0].description,
			        cityName: data.data.name
			     });
			}
		})
		.catch(err => {
		   console.log(err);
		})	
	}

	render() {
		const WeatherConditions = (
			this.state.cityNotFound === '404' ? <ErrorPage /> :
			<div>
			   <div className='homeBtn'>
				     <Link to='/'><button>Home</button></Link>
			   </div>
			   <div className='weatherCardContainer'>
			      <div className='weatherCard'>
				   <div className='conditionsOverview'>
				      <p>{this.state.currentTemp}</p>
				      <p>{this.state.currentConditionDescription}</p>
				   </div>
				   <div className='conditionDetails'>
				      <p>Humidity: {this.state.humidity} </p>
				      <p>Wind Speed: {this.state.wind} </p>
				   </div>
			      </div> 
			     <h4> Location | {this.state.cityName} </h4>
			   </div>
			</div>
		)
		const LoadingDisplay = (
			<div className='loading'>
			   <Loader />
			</div>
		)
		const CurrentWeatherCard = ( 
			this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
		 )

		return (
		   <div>
	             { CurrentWeatherCard }
		   </div>
		)
	}
}

export default CurrentWeather;