const mongoose = require("mongoose");

// Define schema for payroll
const payrollSchema = mongoose.Schema({
    orderId: {
        type: String,
        unique: true,
    },
    itemCode: {
        type: String,
        required: [true, 'Please add item code']
    },
    single: {
        type: Number,
        required: [true, 'Please add single quantity price']
    },
    qty: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    quality: {
        type: Number,
        required: [true, 'Please add quality products']
    },
    damaged: {
        type: Number,
        required: [true, 'Please add damaged products']
    },
    deduction: {
        type: Number,
        required: [true, 'Please add deduction amount']
    },
    net: {
        type: Number,
        required: [true, 'Please add net amount']
    },
    additional: {
        type: String,
    },
}, {
    timestamps: true
});

// Create text indexes for search
payrollSchema.index({
    orderId: 'text',
    itemCode: 'text',
    single: 'text'
});

// Export model using the schema
module.exports = mongoose.model('Payroll', payrollSchema);
