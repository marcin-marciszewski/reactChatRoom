const express = require('express');
const connectDB = require('./config/db');
const path = require('path');


var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

connectDB();


app.use('/messages', require('./routes/messages'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));