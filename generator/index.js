var con = require("./connection/connection");
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var mongoose = require("mongoose");
var db=mongoose.connection;
const request = require('request');

app.get('/weather:location', (req, res) => {
    const adress='http://api.openweathermap.org/data/2.5/weather?q=';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
   const apiId = '&appid=27f0bb007ae9c08ebb57f9ef3d8a7510&units=imperial';

  const n= adress +req.params.location+apiId;


    request(n,  (error, response, body) => {
        if(error) {
            // If there is an error, tell the user 
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
          // const a=res.send(body);
            //console.log(n);
        let w =JSON.parse(body);
        let message = `the weather in ${w.name} is ${w.weather[0].main} with ${w.weather[0].description}`;
        res.send(message);

        }
    });

   /*  */
});
app.listen(3000);