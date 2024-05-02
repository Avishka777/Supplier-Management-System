const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the provided URI
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // Log successful connection
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        // Log any errors and exit the process with failure status
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
