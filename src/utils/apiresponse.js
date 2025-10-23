class apiresponse {
    constructor(status, message, data = null) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.sucess = statuscode < 400;
    }
}
export { apiresponse };