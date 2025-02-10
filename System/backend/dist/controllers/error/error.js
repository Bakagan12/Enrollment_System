"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get500 = exports.get404 = void 0;
// Handle 404 errors
const get404 = (req, res, next) => {
    const error = new Error('Not found.');
    error.statusCode = 404;
    next(error);
};
exports.get404 = get404;
// Handle 500 errors
const get500 = (error, req, res, next) => {
    const data = error.data;
    res.status(error.statusCode || 500);
    res.json({
        error: {
            message: error.message,
            data: data,
        },
    });
};
exports.get500 = get500;
