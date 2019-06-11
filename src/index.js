/*
node js project for biography using express
 */
import express from 'express';
import 'dotenv/config';

const app = express();
//app listens on this port 3000
const port = 3000; 
//making a route with the <http method>(<path(route)>, <middle ware function(req, resp, next)>)
app.get("/", (req, res) => res.send("Hello world"));
//post route
app.post("/post", (req, res) => res.send(res.statusCode))
app.listen(port, () => console.log(`this app listens on port 3000 .${process.env.NAME}`));
