const mongoose = require("mongoose");


const payrollSchema = mongoose.Schema({
   
    orderId: {
        type: String,
        unique: true,
    },
    itemCode:{
        type: String,
        required: [true, 'Please add item code']
    },
    single:{
        type: Number,
        required: [true, 'Please add single qty price']
    },
    qty:{
        type: Number,
        required: [true, 'Please add quantity']
    },
    quality:{
        type: Number,
        required: [true, 'Please add quality products']
    },
    damaged:{
        type: Number,
        required: [true, 'Please add damaged product']
    },
    deduction:{
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
})

payrollSchema.index({
    orderId: 'text',
    itemCode: 'text',
    single: 'text'
})




module.exports = mongoose.model('Payroll', payrollSchema);
