const fetch = require('node-fetch');

module.exports = (app) => {

    let city;
    let lat;
    let lon;

    app.post('/search-location', (req, res) => {
        city = req.body.city;
        res.redirect('/current-weather');
    });

    app.get('/search-location-weather', (req, res) => {
        const apiKey = '&appid=3ba04439f0de5f224e32e47815249bc9&units=imperial&cnt=3';
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

        const userLocation = (url1, url2, city) => {
            let newURL = url1 + city + url2;
            return newURL;
        };

        const apiURL = userLocation(baseURL, apiKey, city);

        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                lat = data.coord.lat;
                lon = data.coord.lon;
                console.log(lat, lon);
                res.send({ data });
            })
            .catch(err => {
                throw (err);
            });
    });

    app.get('/one-call', (req, res) => {
        const apiKey = '&appid=3ba04439f0de5f224e32e47815249bc9&units=imperial&cnt=3';
        const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon;

        const userLocation = (url1, url2) => {
            let newURL = url1 + url2;
            return newURL;

            const apiURL = userLocation(baseURL, apiKey);

            fetch(apiURL)
                .then(res => res.json())
                .then(data => console.log({ data }))
                .catch(err => {
                    throw (err);
                })
        }
    });
};