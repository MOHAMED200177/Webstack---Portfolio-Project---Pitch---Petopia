const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const catRoute = require('./routes/petRoute');
const customerRoute = require('./routes/CustomerRoute');

const app = express();

app.use(cors());

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
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

// 2) ROUTES
app.use('/api/v1/cats', catRoute);
app.use('/api/v1/customers', customerRoute);

module.exports = app;
