const Validator         = require('jsonschema').Validator;
const RecordsSchema     = require('./recordsSchema');
const CustomError        = require('../../utils/error');

const validator = new Validator(); // object validation using json schemas

const initializeRecords = async (app) => {
    app.post('/records/_query', async (req, res) => {
        const result = validator.validate(req.body, RecordsSchema)

        if(result.errors.length > 0) {
            throw new CustomError({ 
                message: 'Invalid body', //error.js message
                code: 'error.invalidBody',
                status: 400, // bad request
                context: {
                    "schema": RecordsSchema,
                    "errorMessage": result.errors.toString(),
                    "body": req.body
                }
            });
        }
        
        records = await app.recordsRepository.findBy(
            startDate = req.body.startDate,
            endDate   = req.body.endDate,
            minCount  = req.body.minCount,
            maxCount  = req.body.maxCount
        )
        
        res.json({
            "code": 0,
            "msg": "Success",
            "records": records
        });
        
    });
}
module.exports = initializeRecords;