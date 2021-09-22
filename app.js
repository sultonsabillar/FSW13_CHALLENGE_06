// Import Module
const express = require('express');
const morgan = require('morgan');
const gameRouter = require('./routes/game.routes');
const dashboardRouter = require('./routes/dashboard.routes');
const middleware = require('./utils/middleware');

// Activte Express Module
const app = express();

// view engine / template engine
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use('/game', gameRouter);
app.use('/dashboard', dashboardRouter);

// Routing (Endpoints and Handlers)
app.get('/', (req, res) => {
  res.status(200).render('./index.ejs');
})

// Error Handlers
app.use(middleware.errorHandler); // Internal Server Error Handler
app.use(middleware.error404Handler); // Error 404 Handler

module.exports = app;
