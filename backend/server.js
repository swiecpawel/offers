const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const offers = require('./routes/api/offers');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then( () => console.log('MongoDB Connected!'))
    .catch(err => console.log(err) );

app.use('/api/offers', offers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));