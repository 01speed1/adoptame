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

                donation.type_donation = type_donation.push(req.type_donation);
                
                switch(body.donation){
                    
                    case 'blood':                        
                        let blood = new donationBlood();
                            donation.donatons.push(blood)
                        break;

                    case 'food':
                        let food = new donationFood();
                            donation.donatons.push(food)
                        break;                   

                    case 'medicine':
                        let medicine = new donationMedicine();
                            donation.donatons.push(medicine)
                        break;
                    
                    case 'object':
                        let object = new donationObject();
                            donation.donatons.push(object)
                        break;
                }
                    





        } catch (error) {
            
        }

    }



}
