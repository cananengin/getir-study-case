const express               = require('express')
const bodyParser            = require('body-parser');
const app                   = express()
const initializeMiddlewares = require('./app/middlewares');
const initializeServices    = require('./app/controllers/service.controller');
const initializeApi         = require('./app/controllers/records.controller');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const createApp = async (config) => {
    app.config = config
    const port = app.config.PORT
    const host = app.config.HOST

    await initializeMiddlewares(app)
    await initializeServices(app)
    await initializeApi(app)

    return app.listen(port, host)
}
module.exports = createApp