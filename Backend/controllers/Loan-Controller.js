const express = require("express");
const router = express.Router();

const Loans = require("../models/Loans");
const Users = require("../models/Users");

router.post("/loan", async (req, res) => {

    const { fullname, money_needed, loan_tenure, employment_status, reason, employment_address, userId } = req.body;

    try{
        const user = await Users.findOne({ userId: userId });
        if(!user){
            console.log(userId);
            return res.status(500).json({ message: "User Not Found "});
        }

        const Loan = new Loans({
            fullname, money_needed, loan_tenure, employment_status, reason, employment_address, status: "pending", userId
        });

        await Loan.save();
        return res.status(200).json({ message: "Applied for Loan successfully"});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get("/loans", async (req, res) => {
    try {
        const loan = await Loans.find(); 
        return res.status(200).json(loan);
    } 
    catch (error) {
        console.error('Error getting loans:', error);
        res.status(500).json(error);
    }
});

router.get("/loan/:userId", async (req, res) => {
    try {
        const loan = await Loans.findAll({ userId: userId });
        return res.status(200).json(loan);
    } 
    catch (error) {
        console.error('Error getting loans of specific user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;