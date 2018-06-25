const donationMedicineModel = require('../../models/donation_types/donation-medicine-model');

module.exports = {

    getDonationMedicinesAll: async (req, res) => {        
        try {
            let donationMedicines = await donationMedicineModel.find();    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - GET",
                donationMedicines:  donationMedicines
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationMedicine: async (req, res) => {
        try {
            let body = req.body;
            let donationMedicine =  new donationMedicineModel();
                donationMedicine.typeMedicine   = body.typeMedicine;
                donationMedicine.form           = body.form;
                donationMedicine.quantity       = body.quantity;
                donationMedicine.especify.qsymbol = body.qsymbol;
                donationMedicine.especify.symbol  = body.symbol;
                donationMedicine.lote           = body.lote;
                donationMedicine.expires        = body.expires;
                donationMedicine.laboratory     = body.laboratory;

                                    await donationMedicine.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - POST",
                donationMedicines:  donationMedicine
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationMedicine: async (req, res) => {
        try {
            let { donationMedicineId } = req.params;
            let body                   = req.body;  
            let donationMedicineUpdate = await donationMedicineModel.findByIdAndUpdate(donationMedicineId, body);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - PUT",
                donationMedicines:  donationMedicineUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationMedicine: async (req, res) => {
        try {
            let { donationMedicineId } = req.params;
            let donationMedicine       = await donationMedicineModel.findByIdAndRemove(donationMedicineId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - DELETE",
                donationMedicine:   donationMedicine
            })
            
        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - DELETE", 
                error:          error
            })

        }
    }




};