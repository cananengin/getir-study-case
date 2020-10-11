const mongoose      = require('mongoose');
const CustomError    = require('../utils/error');

const recordsSchema = new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number]
});

const recordsModel = mongoose.model('recordsModel', recordsSchema, 'records');
const RecordsRepository = {
    findBy: async (startDate = null, endDate = null, maxCount = null, minCount = null) => {  
        const pipeline = [
            {
                "$project": {
                    "totalCount": { "$sum" : ["$counts"] },
                    "key": 1,
                    "createdAt": 1,
                    "_id": 0
                }
            },
            {
                "$match": {
                    "totalCount": { "$gte" : minCount, "$lte": maxCount},
                    "createdAt": { "$gte" : new Date(startDate), "$lte": new Date(endDate) } 
                },
            }            
        ]
        const result = await recordsModel
            .aggregate(pipeline)
            .catch(err => {
                throw new GetirError({
                    message: 'Mongodb query failed on execution.', 
                    code: 'error.mongoQueryFailed',
                    status: 500,
                    context: err
                })
            });
        return result
    }
}
const initializeRecordsRepository = async (app) => {
    app.recordsRepository = RecordsRepository
}

module.exports = initializeRecordsRepository
