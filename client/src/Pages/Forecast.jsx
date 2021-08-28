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
			  feelsLike: '',
		      humidity: '',
		      wind: '',
		      windDirection: '',
		      currentCondition: '',
		      currentConditionDescription: '',
		      weatherIcon: '',
		      cityName: '',
		      cityNotFound: '',
			  tomorrowTemp: '',
			  day3: '',
			  day4: '',
			  day5: '',
			  day6: '',
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
					feelsLike: Math.round(data.data.main.feels_like) + '°',
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

		fetch('/search-location-forecast')
			.then(res => res.json())
			.then(response => {
				if (response.response.cod === '404') {
					this.setState({
						isLoading: false,
						cityNotFound: '404'
					})
				} else {
					this.setState({
					tomorrowTemp: Math.round(response.response.list[0].main.temp) + '°',
					day3: Math.round(response.response.list[1].main.temp) + '°',
					day4: Math.round(response.response.list[2].main.temp) + '°',
					day5: Math.round(response.response.list[3].main.temp) + '°',
					day6: Math.round(response.response.list[4].main.temp) + '°',
				});
			}
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
			   <h4> Location | {this.state.cityName} </h4>
			      <div className='weatherCard'>
				   <div className='conditionsOverview'>
				      <p>Current Temperature: {this.state.currentTemp}</p>
					  <p>Feels Like: {this.state.feelsLike}</p>
				      <p>Description: {this.state.currentConditionDescription}</p>
				   </div>
				   <div className='conditionDetails'>
				      <p>Humidity: {this.state.humidity} </p>
				      <p>Wind Speed: {this.state.wind} </p>
				   </div>
			      </div> 
				 <p>Tomorrow's Forecast: {this.state.tomorrowTemp}</p>
				 <p>2-Day Forecast: {this.state.day3}</p>
				 <p>3-Day Forecast: {this.state.day4}</p>
				 <p>4-Day Forecast: {this.state.day5}</p>
				 <p>5-Day Forecast: {this.state.day6}</p>
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