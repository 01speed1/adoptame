const donationModel = require('../models/donation-model');

const typeDonation     = require('../models/master_detail/types-donations-model')

const donationFood     = require('../models/donation_types/donation-food-model')
const donationMedicine = require('../models/donation_types/donation-medicine-model')
const donationBlood    = require('../models/donation_types/donation-blood-model')
const donationObject   = require('../models/donation_types/donation-objects-model')



module.exports = { 





    // POST 
    createDonation: async (req, res) => {

        try {

            let body = req.body;
            let donation = new donationModel()

        } catch (error) {
            
        }

    }



}
