const asyncHandler = require("express-async-handler");
const Supplier = require("../models/supplierModel");

// Get a single supplier by agent ID
const getSingleSupplier = asyncHandler(async (req, res) => {
    const ID = req.params.id;
    const singleSupplier = await Supplier.find({ agentID: ID });
    if (!singleSupplier) {
        res.status(400).json({ message: "No supplier found" });
    } else {
        res.status(200).json(singleSupplier);
    }
});

// Get a single supplier by MongoDB ID
const getSingleSupplierMongo = asyncHandler(async (req, res) => {
    const mongo = req.params.id;
    const singleSupplier = await Supplier.findById(mongo);
    if (!singleSupplier) {
        res.status(400).json({ message: "No supplier found" });
    } else {
        res.status(200).json(singleSupplier);
    }
});

// Get all suppliers sorted by creation date
const getAllSuppliers = asyncHandler(async (req, res) => {
    const allSuppliers = await Supplier.find({}).sort({ createdAt: -1 });
    if (allSuppliers.length > 0) {
        res.json(allSuppliers);
    } else {
        res.json({ message: "No items in the inventory" });
    }
});

// Register a new supplier
const registerSupplier = asyncHandler(async (req, res) => {
    const {
        companyName,
        businessType,
        agentName,
        agentID,
        supplierCategory,
        supplyingItem,
        email,
        phone,
        companyAddress,
    } = req.body;
    const newSupplier = await Supplier.create({
        companyName,
        businessType,
        agentName,
        agentID,
        supplierCategory,
        supplyingItem,
        email,
        phone,
        companyAddress,
    });
    res.json(newSupplier);
});

// Update a single supplier
const updateSingleSupplier = asyncHandler(async (req, res) => {
    const mongoID = req.params.id;
    const updatedSupplier = await Supplier.findByIdAndUpdate(mongoID, req.body, { new: true });
    if (!updatedSupplier) {
        res.status(404);
        throw new Error("Supplier not found");
    } else {
        res.status(202).json(updatedSupplier);
    }
});

// Delete a single supplier
const deleteSingleSupplier = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await Supplier.findByIdAndDelete(id);
    res.status(200).json({ message: "Supplier deleted from the database" });
});

module.exports = {
    deleteSingleSupplier,
    updateSingleSupplier,
    registerSupplier,
    getAllSuppliers,
    getSingleSupplier,
    getSingleSupplierMongo
};
