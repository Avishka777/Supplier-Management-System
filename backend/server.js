const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const supplierRoutes = require('./routes/supplierRoutes');
const payrollRoutes = require('./routes/supplierPayrollRoutes')
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/suppliers', supplierRoutes);

app.use('/api/payroll', payrollRoutes);

app.use(errorHandler);

connectDB();

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));