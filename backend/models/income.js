const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10,
    },
    type: {
        type: String,
        default: "income",
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: false,
        maxLength: 50,
    }
}, {timestamps: true})

module.exports = mongoose.model("Income", IncomeSchema)