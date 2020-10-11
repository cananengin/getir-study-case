const initializeRecordsApi = require('./records');

const initializeApi = async (app) => {
    await initializeRecordsApi(app)
}

module.exports = initializeApi