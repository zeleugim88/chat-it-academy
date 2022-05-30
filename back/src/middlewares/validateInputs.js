const { validationResult } = require('express-validator');


const validateInputs = (req, res, next ) => {
    //Express validator returns the errors from the request
    
    const inputErrors = validationResult( req ); //If inputErrors is empty, it means that there are not any errors.

    if ( !inputErrors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: inputErrors.mapped()
            //mapped() is a function created by "validationResult" (Express Validator)
        });
    }
    next();
}

module.exports = {
    validateInputs
}