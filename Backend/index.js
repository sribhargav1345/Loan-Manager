const express = require('express');
const cors = require("cors");

const bodyParser = require("body-parser");
const LoanController = require("./controllers/Loan-Controller");
const Users = require("./controllers/Users");

const app = express();

require('dotenv').config();
const port = 5000;

const mongoDB = require("./db");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', LoanController);
app.use('/api', Users);

mongoDB();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});