// Server
const express = require('express');
const app     = express();
// Conexion Database
var mongoose = require('mongoose');
// Request Web
const cors    = require('cors');
// Handler Directories
const path    = require('path');


// Database
mongoose.connection.openUri('mongodb://localhost:27017/adoptame', 
(error, response) => {
    if(error) throw error;
    console.log('Database: \x1b[32m%s\x1b[0m',' Online');
})


// Routes
const IndexRoutes  = require('./routes/index.routes');

// Routes for Master Details
const breed   = require('./routes/master_detail/breed.route');


// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors())
app.use(express.json()); // Esto es como el body-parser
app.use(express.urlencoded({ extended: false }));



// Routes
app.use(IndexRoutes);
app.use('/master', breed);


// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})