const express = require('express');
const routes = require('./routes');
require('express-async-errors');

const app = express();

// analisa solicitações JSON de entrada e coloca os dados analisados ​​em req.body.
app.use(express.json());

// o express interpreta as rotas como Middlewares, por isso o use
app.use(routes);

// o error handler sempre deve vir depois das rotas
app.use((error, request, response, next) => {
    console.log(error);
    response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
