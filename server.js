const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASS);

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => { console.log('DB conaction successful'); });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});