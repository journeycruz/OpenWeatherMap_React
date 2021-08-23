const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api/routes')(app);

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log(`Server listening on port ${port}`);
});