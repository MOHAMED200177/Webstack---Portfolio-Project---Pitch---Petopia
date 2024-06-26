const express = require('express');
const morgan = require('morgan');
const catRoute = require('./routes/petRoute');
const path = require('path');
const customerRoute = require('./routes/CustomerRoute');
const app = express();
const cors = require('cors');


app.use(cors());
// 1) MIDDLEWARES
if (process.env.NODE === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/cats', catRoute);
app.use('/api/v1/customers', customerRoute);


module.exports = app;
