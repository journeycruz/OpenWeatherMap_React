const axios = require('axios');

function getTemps() {
    const apiKey = '3ba04439f0de5f224e32e47815249bc9';
    const lat = '30.2240897';
    const lon = '-92.01984270000003';

    const weatherQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&apikey=' + apiKey + '&cnt=3';

    function getWeather(query) {
        let temps = [];

        axios
            .get(weatherQueryURL)
            .then(function(response) {
                temps.push(response.data.list[0].main.temp);
                temps.push(response.data.list[1].main.temp);
                temps.push(response.data.list[2].main.temp);
                console.log("Temperatures for the next 3 days in Lafayette (Farenheit): " + temps);
            });
        return temps;
    };

    getWeather(weatherQueryURL);
};

module.exports = getTemps();