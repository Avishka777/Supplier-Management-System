const asyncHandler = require('express-async-handler');
const Payroll = require('../models/supplierPayrollModel')

// Get all payrolls or search by query
const getPayroll = asyncHandler(async (req, res) => {
    const qSearch = req.query.search;
    let payrolls;
    if (qSearch) {
        payrolls = await Payroll.find({
            $text: { $search: qSearch }
        });
    } else {
        payrolls = await Payroll.find();
    }
    res.status(200).json(payrolls);
})

// Get payroll by ID
const getPayrollById = asyncHandler(async (req, res) => {
    const payroll = await Payroll.findById(req.params.id);
    if (payroll) {
        res.status(200).json(payroll);
    } else {
        res.status(404);
        throw new Error('Payroll details not found');
    }
})

// Add a new payroll
const addPayroll = asyncHandler(async (req, res) => {
    const { orderId, itemCode, single, qty, quality, damaged, deduction, net, additional } = req.body;
    const payroll = new Payroll({
        orderId,
        itemCode,
        single,
        qty,
        quality,
        damaged,
        deduction,
        net,
        additional,
    })
    const savedPayroll = await payroll.save();
    res.status(200).json(savedPayroll); 
})

// Update payroll by ID
const updatePayroll = asyncHandler(async (req, res) => {
    const payroll = await Payroll.findById(req.params.id);
    if (payroll) {
        const updatedPayroll = await Payroll.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
        res.status(200).json(updatedPayroll);
    } else {
        res.status(404);
        throw new Error('Payroll details not found');
    }
})

// Delete payroll by ID
const deletePayroll = asyncHandler(async (req, res) => {
    const payroll = await Payroll.findById(req.params.id);
    if (payroll) {
        await payroll.deleteOne();
        res.status(200).json({ message: 'Payroll details removed' });
    } else {
        res.status(404);
        throw new Error('Payroll details not found');
    }
})

module.exports = { getPayroll, getPayrollById, addPayroll, updatePayroll, deletePayroll }
