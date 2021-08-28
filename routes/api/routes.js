const fetch = require('node-fetch');

module.exports = (app) => {

    let city;

    app.post('/search-location', (req, res) => {
        city = req.body.city;

        if (city === 'asdf') {
            res.redirect('/error');
        } else {
            res.redirect('/current-weather');
        }
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
                res.send({ data });
            })
            .catch(err => {
                throw (err);
                res.redirect('/error');
            });
    });
};