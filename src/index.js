/*
biography Project 
using express, node js, sequelize
*/



// import express from 'express';
// import passport from 'passport';

const express = require('express');
const passport = require('passport');

// import login from './modules/User/index';
// import 'dotenv/config';

// import peopleRouter from './modules/people'
// import userRouter from './modules/User'
// import feedRouter from './modules/feed';
// import cors from 'cors';

const peopleRouter = require('./modules/people');
const userRouter = require('./modules/User');
const feedRouter = require('./modules/feed');
const cors = require('cors');

// import passportConfig from './config/passport';

const app = express();
const port = process.env.PORT || 8000;
// const port = 8000;
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization");
  next();
});
app.use(express.json()) // for parsing application/json

app.use('/people', peopleRouter);
app.use('/user', userRouter);
app.use('/', feedRouter);

//passport middleware
app.use(passport.initialize());

//passporty config
require('./config/passport')(passport)

//Set view engine
app.set('view engine', 'pug')
//making a route with the <http method>(<path(route)>, <middle ware function(req, resp, next)>)
app.get("/", (req, res) => {
    let responseText = `request time<br/>`
    responseText += `<small>time${req.requestTime}</small>`
    //render template using pug
    res.render('example', { title: 'Hey the', message: `Hello there!  ${responseText}` })
    // res.send(responseText)
});

app.listen(port, () => console.log(`this app listens on port .${process.env.PORT || 8000}`));
