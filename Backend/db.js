const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoDB = async() => {

    const USERNAME = "LoanManager";
    const PASSWORD = "LoanManager";

    const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@loanmanager.bpqhm.mongodb.net/?retryWrites=true&w=majority&appName=LoanManager`;

    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Problem connecting Database");
    }
}

module.exports = mongoDB;