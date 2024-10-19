module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: 'An error occurred',
        error: err.message
    });
};
