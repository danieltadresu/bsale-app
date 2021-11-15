const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const sequelize = require('./utils/db/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

sequelize
  .sync({
    force: false,
  })
  .catch((err) => {
    // await sequelize.sync({ force: true });
    console.log("[ error ]");
    console.log(err);
  });

module.exports = app;
