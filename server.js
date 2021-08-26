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

app.use(express.static('client/public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/public', 'index.html'));
});

app.listen(PORT, (err) => {
    if (err) { console.log(err) };
    console.log(`Server listening on port ${PORT}`);
});