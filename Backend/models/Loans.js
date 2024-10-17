const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoanSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    money_needed: {
        type: Number,
        required: true
    },
    loan_tenure: {
        type: String,
        required: true
    },
    employment_status: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    employment_address: {
        type: String,
        required: true
    },
    status: { 
        type: String,
        enum: ['pending', 'registered', 'rejected'], 
        default: 'pending',
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, { 
    timestamps: true 
});

LoanSchema.index(
    { user: 1 },
    { unique: true, partialFilterExpression: { status: 'pending' } }
);

module.exports = mongoose.model("Loan", LoanSchema);
