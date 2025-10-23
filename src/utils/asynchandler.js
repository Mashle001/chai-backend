// const asynchandler = fn => async(req, res, next) => {    
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(500);
//         next(error);
//     }
// };

const asynchandler = (requesthandler) =>{
    async (req, res, next) => {
        try {
            await requesthandler(req, res, next);
        } catch (error) {
            res.status(500);
            next(error);
        }
    }
};
export {asynchandler};