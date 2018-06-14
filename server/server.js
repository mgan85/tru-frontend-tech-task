const express = require('express')
const app = express()
const mockResponseInstore = require('./mocks/instoreMeasures.json');
const mockResponseOnline = require('./mocks/onlineMeasures.json');

app.get('/', (req, res) => {
  res.send('Hello World from TruRating!');
});

app.get('/measures', (req, res) => {
    const shoppingChannel = req.query.shoppingChannel;
    const randomTimer = Math.round(Math.random() * (3000 - 500)) + 500;
        if (!shoppingChannel) {
            res.status(400)        // HTTP status 404: Bad Request
                .send('Bad Request ');
        }
        if (shoppingChannel == 'instore') {
            setTimeout(function () {
                res.send(JSON.stringify(mockResponseInstore));
            }, randomTimer)
        } else {
            setTimeout(function () {
                res.send(JSON.stringify(mockResponseOnline));
            }, randomTimer)
        }
});

app.listen(3001, () => console.log('App listening on port 3001!'))
