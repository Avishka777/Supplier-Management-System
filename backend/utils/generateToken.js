const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = { generateToken };
