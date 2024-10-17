const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoDB = async() => {

    const mongoURL = `mongodb+srv://LoanManager:LoanManager@loanmanager.bpqhm.mongodb.net/?retryWrites=true&w=majority&appName=LoanManager`;
    // wrote username password both in this url to avoid probelms instead of .env

    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Problem connecting Database");
    }
}

module.exports = mongoDB;