const axios = require('axios');
const fetch = require('node-fetch');


module.exports = (app) => {

    let zipcode;

    app.post('/search-location', (req, res) => {
        zipcode = req.body.zipcode;
        res.redirect('/current-weather');
        console.log(req.body.zipcode);
    });

    app.get('/search-location-weather', (req, res) => {
        const apiKey = '&appid=3ba04439f0de5f224e32e47815249bc9&units=imperial&cnt=3';
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

        const userLocation = (url1, url2, zipcode) => {
            let newURL = url1 + zipcode + url2;
            return newURL;
        };

        const apiURL = userLocation(baseURL, apiKey, zipcode);

        axios.get(apiURL)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
                console.log(data);
            })
            .catch(err => {
                throw (err);
            });
    });
};