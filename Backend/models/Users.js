const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    phoneNumber: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    }
}, { 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

UserSchema.virtual('loans', {
    ref: 'Loan', 
    localField: '_id', 
    foreignField: 'user',
});

module.exports = mongoose.model("Users", UserSchema);
