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
const medicineRoutes = require('./routes/master_detail/types-medicines-route');
const rolesRoutes    = require('./routes/master_detail/types-roles-route');
const complaintRoutes= require('./routes/master_detail/types-complaints-route');
const rhRoutes       = require('./routes/master_detail/types-rhs-route');

const donationMedicineRoutes = require('./routes/donation_types/donation-medicine-route');
const donationFoodRoutes  = require('./routes/donation_types/donation-food-route');
const donationBloodRoutes  = require('./routes/donation_types/donation-blood-route');
const donationObjectRoutes  = require('./routes/donation_types/donation-object-route');

const userRoutes     = require('./routes/user-route');
const animalRoutes   = require('./routes/animal-route');
const generateRoutes = require('./routes/donation-route');

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
app.use('/api/master/medicine', medicineRoutes);
app.use('/api/master/roles', rolesRoutes);
app.use('/api/master/complaint', complaintRoutes);
app.use('/api/master/rh', rhRoutes);

app.use('/register/users', userRoutes);
app.use('/register/animals', animalRoutes);

app.use('/donation/type-food', donationFoodRoutes);
app.use('/donation/type-blood', donationBloodRoutes);
app.use('/donation/type-object', donationObjectRoutes);
app.use('/donation/type-medicine', donationMedicineRoutes);

app.use('/generate/donation', generateRoutes);


app.get('/', (req, res)=> { res.send('Ok in index'); })


// Settings
app.set('port', process.env.PORT || 3000);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})