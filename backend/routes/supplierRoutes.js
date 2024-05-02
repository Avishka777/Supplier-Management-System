const express = require("express");
const { getSingleSupplier, getSingleSupplierMongo, getAllSuppliers, updateSingleSupplier, deleteSingleSupplier, registerSupplier } = require("../controllers/supplierController");

const router = express.Router();

// Routes for supplier operations
router.get("/", getAllSuppliers); // Get all suppliers
router.get("/:id", getSingleSupplier); // Get single supplier by ID
router.post("/", registerSupplier); // Register a new supplier
router.put("/:id", updateSingleSupplier); // Update single supplier by ID
router.delete("/:id", deleteSingleSupplier); // Delete single supplier by ID
router.get("/mongo/:id", getSingleSupplierMongo); // Get single supplier by MongoDB ID

module.exports = router;
