require('dotenv').config().parsed;
const createApp = require('./server')

const config = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE
}

console.log(config)

createApp(config)