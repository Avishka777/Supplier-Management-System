// Error handler middleware
const errorHandler = (err, req, res, next) => {
    // Set status code to provided code or default to 500
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    // Send JSON response with error message and stack trace if in development
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

module.exports = {
    errorHandler
}
