const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('webcontent'));

app.listen(process.env.DEV_PORT , () => console.log('listening on port ', process.env.DEV_PORT));