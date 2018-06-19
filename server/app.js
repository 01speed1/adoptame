// Server
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
// Conexion Database
var mongoose        = require('mongoose');
// Request Web
const cors          = require('cors');

// Handler Directories
// const path    = require('path');

// Routes
// /api/master
const typesRoutes    = require('./routes/master_detail/types-animals-route');
const breedRoutes    = require('./routes/master_detail/types-breeds-route');
const donationRoutes = require('./routes/master_detail/types-donations-route');
const objectRoutes   = require('./routes/master_detail/types-objects-route');

// Database
mongoose.connection.openUri('mongodb://localhost:27017/adoptame', 
(error, response) => {
    if(error) throw error;
    console.log('Database: \x1b[32m%s\x1b[0m',' Online');
})


// Middleware
app.use(cors())
// parse application/json
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json())
// Parse application/x-www-form-urleconded
app.use(bodyParser.urlencoded({ extended: false }))


// Routes
app.use('/api/master/type', typesRoutes);
app.use('/api/master/breed', breedRoutes);
app.use('/api/master/donation', donationRoutes);
app.use('/api/master/objects', objectRoutes);
app.get('/', (req, res)=> { res.send('Ok in index'); })


// Settings
app.set('port', process.env.PORT || 3000);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})