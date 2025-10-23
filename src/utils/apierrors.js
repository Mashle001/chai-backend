class apierror extends Error {
    constructor(
        statuscode,
        message="something went wrong", 
        error,
        stack = ""
    ){
        super(message);
        this.statuscode = statuscode;
        this.error = error;
        this.data = null;
        this.message = message;
        this.success = false;

        if(stack){ 
            this.stack = stack
        }else{
            error.captureStackTrace(this, this.constructor);
        }

    }}
export {apierror};