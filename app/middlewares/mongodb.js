const mongoose = require('mongoose');

const initializeMongodb = async (app) => {
    console.log('connecting to mongodb');
    await mongoose.connect(app.config.MONGODB_CONNECTION_STRING, 
        {dbName: app.config.MONGODB_DATABASE, useNewUrlParser: true, useUnifiedTopology: false});
}
module.exports = initializeMongodb