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

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = createServer(app);
server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server listening on port: ${PORT}`);
});