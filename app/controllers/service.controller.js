const initializeRecordsRepository = require('../dataAccess/recordsRepository')
const initializeMongodb = require("../middlewares/mongodb")

const initializeServices = async (app) => {
    await initializeMongodb(app)
    await initializeRecordsRepository(app)
}

module.exports = initializeServices