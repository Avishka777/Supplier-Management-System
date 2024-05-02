const mongoose = require('mongoose');

// Define schema for supplier
const supplierSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    businessType: {
        type: String,
        required: true
    },
    agentName: {
        type: String,
        required: true
    },
    agentID: {
        type: String,
        required: true
    },
    supplierCategory: {
        type: String,
        required: true
    },
    supplyingItem: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Export model using the schema
module.exports = mongoose.model('Supplier', supplierSchema);
