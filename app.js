const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIddleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postRoute = require('./routes/posts');

// works as middleware
app.use('/posts', postRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are on HOME');
});

// Connnect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () =>  console.log('Connected to DB')
);

// How do we start listening to the server
app.listen(4000);