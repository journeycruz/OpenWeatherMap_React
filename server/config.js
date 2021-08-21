module.exports = {
    baseUrl: {
        protocol: 'https',
        hostname: 'api.openweathermap.org',
        path: '/data/2.5/forecast?&units=imperial',
    },

    query: {
        name: 'q',
        id: 'id',
        coordinates: {
            latitude: 'lat',
            longitude: 'lon',
        },
        zipcode: 'zip',
    },

    APIkey: '3ba04439f0de5f224e32e47815249bc9',
};