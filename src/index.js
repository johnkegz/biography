/*
node js project for biography using express
 */
import express from 'express';
import 'dotenv/config';

const app = express();
const port = 3000;

//writting middle warefunctions
const myLogger = (req, res, next) => {
    console.log("middleware function")
    next()
}
const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}
//application level middlewares
app.use(myLogger)
app.use(requestTime)
//error -handling middleware
const errorhandler = (err, req, res, next) => {
    console.log(err.stack)
    res.statusCode(500).send('internal server error')
}
app.use(errorhandler)
//making a route with the <http method>(<path(route)>, <middle ware function(req, resp, next)>)
app.get("/", (req, res) => {
    let responseText = 'request time<br/>'
    responseText += `<small>time${req.requestTime}</small>`

    res.send(responseText)
});
//post route
app.post("/post", (req, res) => res.sendStatus(res.statusCode))
app.listen(port, () => console.log(`this app listens on port 3000 .${process.env.NAME}`));
