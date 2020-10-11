class CustomError extends Error {
    constructor(property) { // constructor for provide custom initialization 
        super(property.message)
        this.message    = property.message || ''
        this.code       = property.code || ''
        this.status     = property.status || 500
        this.context    = property.context || {}
    }
}
module.exports = CustomError