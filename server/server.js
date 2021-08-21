const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
    res.send(`Server listening on port ${port}`);
})


app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log(`Server listening on port ${port}`);
});