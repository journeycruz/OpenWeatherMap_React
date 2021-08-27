const express = require('express');
const path = require('path');
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "https://openweathermap-react.herokuapp.com/",
    ],
}));

require('./routes/api/routes')(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    // force ssl redirect test
    app.use((req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https')
            return res.redirect(['https://', req.get('Host'), req.url].join(''));

        return next();
    });
}

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server listening on port: ${PORT}`);
});