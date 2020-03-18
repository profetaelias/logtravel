const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const answerHandler = (error, req, res, next) => {
   res.json({
       message: error.message,
       stack: process.env.NODE_ENV === 'production' ? '' : error.stack,
   })
};

module.exports = {
    notFound, 
    answerHandler,
};