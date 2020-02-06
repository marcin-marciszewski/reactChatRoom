const express = require('express');
const connectDB = require('./config/db');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

connectDB();

app.use('/messages', require('./routes/messages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
