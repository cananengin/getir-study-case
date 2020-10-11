const RecordsSchema = {
    startDate: {
        type: "string",
        format: "date", //yyyy-mm-dd
        required: false
    },
    endDate: {
        type: "string",
        format: "date",
        required: false
    },
    minCount: {
        type: "number",
        required: false,
    },
    maxCount: {
        type: "number",
        required: false,
    }
}

module.exports = RecordsSchema;