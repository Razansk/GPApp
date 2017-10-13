var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./app/routes');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://razank:123456@ds147842.mlab.com:47842/shopping',{useMongoClient: true});

app.listen(process.env.PORT, () => console.log('server is up')); 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
router(app);
