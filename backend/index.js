const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const handleError = require('./middleware/handleErrors')

app.use(morgan('tiny'));
app.use(helmet());

app.get('/', (req, res, next) => {
    res.send({message: 'Hello world!'});
});

app.use(handleError.notFound);
app.use(handleError.answerHandler);

app.listen(3000, ()  => {
    console.log("escutando na porta 3000")
})