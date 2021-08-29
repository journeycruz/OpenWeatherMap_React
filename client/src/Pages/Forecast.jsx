import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ReactAnimatedWeather from 'react-animated-weather';

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
				let weatherId = data.data.weather[0].id;

				if(weatherId <= 232) {
					 this.setState({ weatherIcon: <ReactAnimatedWeather icon='SLEET' color='black' size='64' animate='true' /> })
				} else if(weatherId >= 300 && weatherId <= 531) {
					 this.setState({ weatherIcon: <ReactAnimatedWeather icon='RAIN' color='black' size='64' animate='true' /> });
				} else if(weatherId >= 600 && weatherId <= 622 ) {
					 this.setState({ weatherIcon: <ReactAnimatedWeather icon='SNOW' color='black' size='64' animate='true' /> });
				} else if(weatherId === 800) {
					 this.setState({ weatherIcon: <ReactAnimatedWeather icon='CLEAR_DAY' color='black' size='64' animate='true' /> });
				} else if(weatherId >= 801 && weatherId <= 804) {
					 this.setState({ weatherIcon: <ReactAnimatedWeather icon='CLOUDY' color='black' size='64' animate='true' /> });
				}
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
					let weatherId = response.response.list[0].weather.id;

					if(weatherId <= 232) {
						 this.setState({ weatherIcon: <ReactAnimatedWeather icon='SLEET' color='black' size='64' animate='true' /> })
					} else if(weatherId >= 300 && weatherId <= 531) {
						 this.setState({ weatherIcon: <ReactAnimatedWeather icon='RAIN' color='black' size='64' animate='true' /> });
					} else if(weatherId >= 600 && weatherId <= 622 ) {
						 this.setState({ weatherIcon: <ReactAnimatedWeather icon='SNOW' color='black' size='64' animate='true' /> });
					} else if(weatherId === 800) {
						 this.setState({ weatherIcon: <ReactAnimatedWeather icon='CLEAR_DAY' color='black' size='64' animate='true' /> });
					} else if(weatherId >= 801 && weatherId <= 804) {
						 this.setState({ weatherIcon: <ReactAnimatedWeather icon='CLOUDY' color='black' size='64' animate='true' /> });
					}
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
			<div className='transparent'>
				<Animated isVisible='true' animationIn='fadeIn'>
			   <div className='weatherCardContainer shadow-lg p-3 mb-5 rounded'>
				<Breadcrumb>
						<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						<Breadcrumb.Item active href="/weather-dashboard">
							Weather Dashboard
						</Breadcrumb.Item>
					</Breadcrumb>
			      <div className='weatherCard'>
					  <div className="currentWeather shadow-lg">
					  <h4> Location | {this.state.cityName} </h4>
				   <div className='conditionsOverview'>
				      <p>Current Temperature: {this.state.currentTemp}</p>
						<div>{this.state.weatherIcon}</div>
					  <p>Feels Like: {this.state.feelsLike}</p>
				      <p>Description: {this.state.currentConditionDescription}</p>
				   </div>
				   <div className='conditionDetails'>
				      <p>Humidity: {this.state.humidity} </p>
				      <p>Wind Speed: {this.state.wind} </p>
				   </div>
				   </div>
				   <div className="frcstWeather shadow-lg">
				  <div className="row frcstRow">
				  <div className="fcCrd col-lg-2 shadow-lg">
				 <p>Tomorrow's Forecast: {this.state.tomorrowTemp}</p>
				 <div>{this.state.weatherIcon}</div>
				 </div>
				 <div className="fcCrd col-lg-2 shadow-lg">
				 <p>2-Day Forecast: {this.state.day3}</p>
				 </div>
				 <div className="fcCrd col-lg-2 shadow-lg">
				 <p>3-Day Forecast: {this.state.day4}</p>
				 </div>
				 <div className="fcCrd col-lg-2 shadow-lg">
				 <p>4-Day Forecast: {this.state.day5}</p>
				 </div>
				 <div className="fcCrd col-lg-2 shadow-lg">
				 <p>5-Day Forecast: {this.state.day6}</p>
				 </div>
			   </div>
			   </div>
			   </div>
			</div>
			</Animated>
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