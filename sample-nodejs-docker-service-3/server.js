'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8083;

//Apps
const app = express();

app.get('/service-3', (req, res) => {
    return res.send(`It's from service 3`);
  });
  
app.get('/service-3/hello', (req, res) => {
    return res.send(`It's hello service 3`);
  });

app.listen(PORT);
console.log(`Running on port :${PORT}`);  