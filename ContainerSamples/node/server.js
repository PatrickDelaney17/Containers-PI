'use strict';

const express = require('express');

// Constants
const PORT = 3333;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  
    //get the request url following the port 
    // req.url = /user
    // to get the query string after it 
    //  var q = url.parse(req.url, true).query;   // https://www.w3schools.com/nodejs/nodejs_http.asp

  res.send('Server is up!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});


function detectReqValue() {
    var currentQueryString = window.location.search;
    if (currentQueryString) {
        return true;
    } else {
      return false;
    }
}