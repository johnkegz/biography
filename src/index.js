/*
biography Project 
using express, node js, sequelize
*/

import express from 'express';
import 'dotenv/config';

import checkDbConnection from './dbConnection'

const app = express();
const port = 3000;
//Call dbCOnnection
app.use(checkDbConnection)

//Set view engine
app.set('view engine', 'pug')
//making a route with the <http method>(<path(route)>, <middle ware function(req, resp, next)>)
app.get("/", (req, res) => {
    let responseText = 'request time<br/>'
    responseText += `<small>time${req.requestTime}</small>`
    //render template using pug
    res.render('example', { title: 'Hey the', message: 'Hello there!' })
    // res.send(responseText)
});
//post route
app.post("/post", (req, res) => res.sendStatus(res.statusCode))
app.listen(port, () => console.log(`this app listens on port 3000 .${process.env.NAME}`));
