const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto'); 


const Users = require('../models/Users');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, name: user.name, email: user.email, userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

router.post('/register', async (req, res) => {

    console.log(req.body);
    const { name, email, password, phoneNumber } = req.body;
    console.log(name);

    if (!name || !email || !password || !phoneNumber) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        const email_dup = await Users.findOne({ email });

        if(email_dup){
            return res.status(400).json({ message: "Email aldready Registered" });
        }

        const Usercode = name.substring(0,2).toUpperCase();

        let idPrefix = `${Usercode}`;

        idPrefix = idPrefix.replace(/[^A-Z]/g, '');

        let uniqueId;
        let isUnique = false;

        do {
            const randomPart = crypto.randomBytes(2).toString('hex').toUpperCase().substring(0, 4);
            uniqueId = `${idPrefix}${randomPart}`;

            const existingUser = await Users.findOne({ id: uniqueId });
            if (!existingUser) {
                isUnique = true;
            }

        } while (!isUnique);

        const user = await Users.create({ name, email, password: hashedPassword, phoneNumber, userId: uniqueId });
        const token = generateToken(user);

        res.status(200).json({ message: "User created Successfully", authToken: token });
    } 
    catch (error) {
        console.log("500 error")
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Signup First' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.status(200).json({ message: "Login Successfull", token });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;