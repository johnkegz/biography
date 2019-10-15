/*
biography Project 
using express, node js, sequelize
*/

import express from 'express';
import 'dotenv/config';

import peopleRouter from './modules/people'

const app = express();
const port = process.env.PORT || 8000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json()) // for parsing application/json

app.use(peopleRouter)

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

app.listen(port, () => console.log(`this app listens on port 8000 .${process.env.NAME}`));
