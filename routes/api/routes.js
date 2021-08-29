const fetch = require('node-fetch');

module.exports = (app) => {

    let city;

    app.post('/search-location', (req, res) => {
        city = req.body.city;
        res.redirect('/weather-dashboard');
    });

    app.get('/search-location-weather', (req, res) => {
        const apiKey = '&appid=3ba04439f0de5f224e32e47815249bc9&units=imperial';
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

        const userLocation = (url1, url2, city) => {
            let newURL = url1 + city + url2;
            return newURL;
        };

        const apiURL = userLocation(baseURL, apiKey, city);

        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                throw (err);
                res.redirect('/error');
            });
    });

    app.get('/search-location-forecast', (req, res) => {
        const apiKey = '&appid=3ba04439f0de5f224e32e47815249bc9&units=imperial&cnt=5';
        const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';

        const userLocation = (url1, url2, city) => {
            let newURL = url1 + city + url2;
            return newURL;
        };

        const apiURL = userLocation(baseURL, apiKey, city);

        fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                res.send({ response });
            })
            .catch(err => {
                throw (err);
                res.redirect('/error');
            });
    });
};