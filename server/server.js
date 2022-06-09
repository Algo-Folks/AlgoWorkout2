const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');
const sessionRouter = require('./routes/sessionRouter');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

// parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.resolve(__dirname, '../')));

// MongoDB connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/algos';

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  dbName: 'algos'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', MONGO_URI)
})

db.on('error', err => {
  console.error('connection error:', err)
})

// apiRouter
app.use('/api/sessions', sessionRouter);
app.use('/api', apiRouter);


// catch-all route handler
app.all('*', (req, res) => {
  console.log('Page not found');
  return res.status(404).send('Page not found.')
});

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    console.log(err);
    return res.status(errorObj.status).json(errorObj.message);
  });

  // start server
  app.listen(PORT, ()=> {
      console.log(`Server listening on port: ${PORT}...`);
  })

  module.exports = app;