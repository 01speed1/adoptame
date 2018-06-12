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


// Middleware
app.use(cors())
app.use(express.json()); // Esto es como el body-parser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api',require('./routes/index.routes'))

app.get('/', (req, res)=> {
    res.send('Ok in index');
})

// Settings
app.set('port', process.env.PORT || 3000);





// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})