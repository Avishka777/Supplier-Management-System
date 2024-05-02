const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();

// Middleware
const { errorHandler } = require("./middleware/errorMiddleware");

// Database connection
const connectDB = require("./config/db");

// Routes
const supplierRoutes = require('./routes/supplierRoutes');
const payrollRoutes = require('./routes/supplierPayrollRoutes');

// Environment variables
const port = process.env.PORT || 4000;

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/suppliers', supplierRoutes);
app.use('/api/payroll', payrollRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to database
connectDB();

// Start server
app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
