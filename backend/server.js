const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');

const app = express();

app.use(express.json());
app.use(cors());
const db = config.get('mongoURI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then( () => console.log('MongoDB Connected!'))
    .catch(err => console.log(err) );

app.use('/api/offers', require('./routes/api/offers'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
app.get('/', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
});
