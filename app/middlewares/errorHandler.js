const CustomError = require('../utils/error');

const initializeErrorHandler = async (app) => {
    app.use(async(err, req, res, next) => {
        if (err instanceof CustomError) {
            if(err.status == 500) {
                res.status(err.status).json({
                    mgs: err.message,
                    code: err.code,
                    context: err.context
                });
            } else {
                res.status(err.status).json({
                    msg: err.message,
                    code: err.code,
                    context: err.context
                });
            }
        } else if (err instanceof SyntaxError) {
            res.status(400).json({
                msg: 'Provided body is not a valid json.',
                code: 'err.invalidBody',
                context: err.message
            });
        } else {
            res.status(500).json({
                msg: 'Internal error occured.',
                code: 'err.internalError',
                errorContext: {}
            });
        }
    });
}
module.exports = initializeErrorHandler;