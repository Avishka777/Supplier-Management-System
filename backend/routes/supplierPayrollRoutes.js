const express = require('express');
const router = express.Router();
const { getPayroll, getPayrollById, addPayroll, updatePayroll, deletePayroll } = require('../controllers/supplierPayrollController');

// Define routes for payroll operations
router.get('/', getPayroll); // Get all payrolls
router.get('/:id', getPayrollById); // Get payroll by ID
router.post('/', addPayroll); // Add a new payroll
router.delete('/:id', deletePayroll); // Delete payroll by ID
router.put('/:id', updatePayroll); // Update payroll by ID

module.exports = router;
