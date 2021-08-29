import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactAnimatedWeather from "react-animated-weather";

//components
import ErrorPage from "./Error";
import { Throbber } from "../Components/Throbber";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      currentTemp: "",
      feelsLike: "",
      humidity: "",
      wind: "",
      windDirection: "",
      currentCondition: "",
      currentConditionDescription: "",
      tempMin: "",
      tempMax: "",
      pressure: "",
      weatherIcon: "",
      cityName: "",
      cityNotFound: "",
      weatherIconForecast: "",
      tomorrowTemp: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      tomorrowWind: "",
      tomorrowHumidity: "",
      tomorrowFL: "",
      twoWind: "",
      twoHumidity: "",
      twoFL: "",
      threeWind: "",
      threeHumidiy: "",
      threeFL: "",
      fourWind: "",
      fourHumidity: "",
      fourFL: "",
      fiveWind: "",
      fiveHumidity: "",
      fiveFL: "",
      sixWind: "",
      sixHumidity: "",
      sixFL: "",
      avgTemp: "",
    };
  }

  componentDidMount() {
    const average = (a, b, c) => {
      let sum = a + b + c;
      return Math.round(sum / 3);
    };

    const getCardinal = (angle) => {
      const degreePerDirection = 360 / 8;
      const offsetAngle = angle + degreePerDirection / 2;
      return offsetAngle >= 0 * degreePerDirection &&
        offsetAngle < 1 * degreePerDirection
        ? "N"
        : offsetAngle >= 1 * degreePerDirection &&
          offsetAngle < 2 * degreePerDirection
        ? "NE"
        : offsetAngle >= 2 * degreePerDirection &&
          offsetAngle < 3 * degreePerDirection
        ? "E"
        : offsetAngle >= 3 * degreePerDirection &&
          offsetAngle < 4 * degreePerDirection
        ? "SE"
        : offsetAngle >= 4 * degreePerDirection &&
          offsetAngle < 5 * degreePerDirection
        ? "S"
        : offsetAngle >= 5 * degreePerDirection &&
          offsetAngle < 6 * degreePerDirection
        ? "SW"
        : offsetAngle >= 6 * degreePerDirection &&
          offsetAngle < 7 * degreePerDirection
        ? "W"
        : "NW";
    };

    fetch("/search-location-weather")
      .then((res) => res.json())
      .then((data) => {
        if (data.data.cod === "404") {
          this.setState({
            isLoading: false,
            cityNotFound: "404",
          });
        } else {
          let weatherId = data.data.weather[0].id;

          if (weatherId <= 232) {
            this.setState({
              weatherIcon: (
                <ReactAnimatedWeather
                  icon='SLEET'
                  color='darkgrey'
                  size='150'
                  animate='true'
                />
              ),
            });
          } else if (weatherId >= 300 && weatherId <= 531) {
            this.setState({
              weatherIcon: (
                <ReactAnimatedWeather
                  icon='RAIN'
                  color='darkgrey'
                  size='150'
                  animate='true'
                />
              ),
            });
          } else if (weatherId >= 600 && weatherId <= 622) {
            this.setState({
              weatherIcon: (
                <ReactAnimatedWeather
                  icon='SNOW'
                  color='darkgrey'
                  size='150'
                  animate='true'
                />
              ),
            });
          } else if (weatherId === 800) {
            this.setState({
              weatherIcon: (
                <ReactAnimatedWeather
                  icon='CLEAR_DAY'
                  color='goldenrod'
                  size='150'
                  animate='true'
                />
              ),
            });
          } else if (weatherId >= 801 && weatherId <= 804) {
            this.setState({
              weatherIcon: (
                <ReactAnimatedWeather
                  icon='CLOUDY'
                  color='darkgrey'
                  size='150'
                  animate='true'
                />
              ),
            });
          }
          this.setState({
            isLoading: false,
            currentTemp: Math.round(data.data.main.temp) + "°F",
            feelsLike: Math.round(data.data.main.feels_like) + "°F",
            humidity: data.data.main.humidity + "%",
            wind: Math.round(data.data.wind.speed) + " mph",
            windDirection: getCardinal(data.data.wind.deg),
            tempMin: Math.round(data.data.main.temp_min) + "°F",
            tempMax: Math.round(data.data.main.temp_max) + "°F",
            pressure: data.data.main.pressure,
            currentCondition: data.data.weather[0].main,
            currentConditionDescription: data.data.weather[0].description,
            cityName: data.data.name,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/search-location-forecast")
      .then((res) => res.json())
      .then((response) => {
        if (response.response.cod === "404") {
          this.setState({
            isLoading: false,
            cityNotFound: "404",
          });
        } else {
          this.setState({
            tomorrowTemp:
              Math.round(response.response.list[0].main.temp) + "°F",
            day2: Math.round(response.response.list[1].main.temp) + "°F",
            day3: Math.round(response.response.list[2].main.temp) + "°F",
            day4: Math.round(response.response.list[3].main.temp) + "°F",
            day5: Math.round(response.response.list[4].main.temp) + "°F",
            tomorrowWind: Math.round(response.response.list[0].wind.speed),
            tomorrowHumidity: response.response.list[0].main.humidity,
            tomorrowFL:
              Math.round(response.response.list[0].main.feels_like) + "°F",
            twoWind: Math.round(response.response.list[1].wind.speed),
            twoHumidity: response.response.list[1].main.humidity,
            twoFL: Math.round(response.response.list[1].main.feels_like) + "°F",
            threeWind: Math.round(response.response.list[2].wind.speed),
            threeHumidity: response.response.list[2].main.humidity,
            threeFL:
              Math.round(response.response.list[2].main.feels_like) + "°F",
            fourWind: Math.round(response.response.list[3].wind.speed),
            fourHumidity: response.response.list[3].main.humidity,
            fourFL:
              Math.round(response.response.list[3].main.feels_like) + "°F",
            fiveWind: Math.round(response.response.list[4].wind.speed),
            fiveHumidity: response.response.list[4].main.humidity,
            fiveFL:
              Math.round(response.response.list[4].main.feels_like) + "°F",
            avgTemp:
              average(
                response.response.list[0].main.temp,
                response.response.list[1].main.temp,
                response.response.list[2].main.temp
              ) + "°F",
          });
        }
      });
  }

  render() {
    const WeatherConditions =
      this.state.cityNotFound === "404" ? (
        <ErrorPage />
      ) : (
        <div className='transparent'>
          <Animated isVisible='true' animationIn='fadeIn'>
            <div className='weatherCardContainer shadow-lg p-3 mb-5 rounded'>
              <Breadcrumb>
                <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                <Breadcrumb.Item active href='/weather-dashboard'>
                  Weather Dashboard
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className='weatherCard'>
                <div className='currentWeather shadow-lg mx-0 row'>
                  <div className='col-md-3'>
                    <h4> Location | {this.state.cityName} </h4>
                    <p className='display-1'>{this.state.currentTemp}</p>
                    <p className='conditionDetails'>
                      Feels Like: {this.state.feelsLike}
                    </p>
                    <p className='conditionDetails'>
                      Description: {this.state.currentConditionDescription}
                    </p>
                  </div>
                  <div className='col-md-5 mt-auto mb-auto'>
                    <div>{this.state.weatherIcon}</div>
                  </div>
                  <div className='col-md-3 mt-auto mb-auto mx-auto'>
                    <p className='conditionDetails'>
                      High: {this.state.tempMax}{" "}
                    </p>
                    <p className='conditionDetails'>
                      Low: {this.state.tempMin}{" "}
                    </p>
                    <p className='conditionDetails'>
                      Avg. Temp (3-Day): {this.state.avgTemp}
                    </p>
                    <p className='conditionDetails'>
                      Humidity: {this.state.humidity}{" "}
                    </p>
                    <p className='conditionDetails'>
                      Wind Speed: {this.state.wind}{" "}
                    </p>
                    <p className='conditionDetails'>
                      Wind Direction: {this.state.windDirection}
                    </p>
                    <p className='conditionDetails'>
                      Atmospheric Pressure: {this.state.pressure} atm
                    </p>
                  </div>
                </div>
                <div className='frcstWeather shadow-lg'>
                  <div className='row frcstTitle'>
                    <h4>Weather Forecast:</h4>
                  </div>
                  <div className='row frcstRow mx-auto'>
                    <div className='fcCrd col-lg-2 shadow-lg'>
                      <p>Tomorrow's Forecast:</p>
                      <p className='display-5'>{this.state.tomorrowTemp}</p>
                      <p className='forecastDetails'>
                        Feels Like: {this.state.tomorrowFL}
                      </p>
                      <p className='forecastDetails'>
                        Humidity: {this.state.tomorrowHumidity}%
                      </p>
                      <p className='forecastDetails'>
                        Wind Speed: {this.state.tomorrowWind} mph
                      </p>
                    </div>
                    <div className='fcCrd col-lg-2 shadow-lg'>
                      <p>2-Day Forecast:</p>
                      <p className='display-5'>{this.state.day2}</p>
                      <p className='forecastDetails'>
                        Feels Like: {this.state.twoFL}
                      </p>
                      <p className='forecastDetails'>
                        Humidity: {this.state.twoHumidity}%
                      </p>
                      <p className='forecastDetails'>
                        Wind Speed: {this.state.twoWind} mph
                      </p>
                    </div>
                    <div className='fcCrd col-lg-2 shadow-lg'>
                      <p>3-Day Forecast:</p>
                      <p className='display-5'>{this.state.day3}</p>
                      <p className='forecastDetails'>
                        Feels Like: {this.state.threeFL}
                      </p>
                      <p className='forecastDetails'>
                        Humidity: {this.state.threeHumidity}%
                      </p>
                      <p className='forecastDetails'>
                        Wind Speed: {this.state.threeWind} mph
                      </p>
                    </div>
                    <div className='fcCrd col-lg-2 shadow-lg'>
                      <p>4-Day Forecast:</p>
                      <p className='display-5'>{this.state.day4}</p>
                      <p className='forecastDetails'>
                        Feels Like: {this.state.fourFL}
                      </p>
                      <p className='forecastDetails'>
                        Humidity: {this.state.fourHumidity}%
                      </p>
                      <p className='forecastDetails'>
                        Wind Speed: {this.state.fourWind} mph
                      </p>
                    </div>
                    <div className='fcCrd col-lg-2 shadow-lg'>
                      <p>5-Day Forecast:</p>
                      <p className='display-5'>{this.state.day5}</p>
                      <p className='forecastDetails'>
                        Feels Like: {this.state.fiveFL}
                      </p>
                      <p className='forecastDetails'>
                        Humidity: {this.state.fiveHumidity}%
                      </p>
                      <p className='forecastDetails'>
                        Wind Speed: {this.state.fiveWind} mph
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      );
    const LoadingDisplay = (
      <div className='loading'>
        <Throbber />
      </div>
    );
    const CurrentWeatherCard =
      this.state.isLoading === true ? (
        <div> {LoadingDisplay} </div>
      ) : (
        <div> {WeatherConditions} </div>
      );

    return <div>{CurrentWeatherCard}</div>;
  }
}

export default CurrentWeather;
