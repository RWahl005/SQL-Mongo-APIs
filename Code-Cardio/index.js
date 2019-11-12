// Initializing our packagages.
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();


/**
 * Regiser our view engine and define the path
 */
// app.engine()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Server Configuration
 */
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.text());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes / Controller
*/
const homeController = require('./controllers/home.js');
app.use('/', homeController);

// I have stuff running on 8080 so I am running this on 8081
app.listen(8081);