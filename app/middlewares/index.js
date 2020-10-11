const initializeErrorHandler = require('./errorHandler');

const initializeMiddlewares = async (app) => {
    await initializeErrorHandler(app)
}

module.exports = initializeMiddlewares