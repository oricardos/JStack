const express = require("express");
const routes = require("./routes");

const app = express();

// analisa solicitações JSON de entrada e coloca os dados analisados ​​em req.body.
app.use(express.json());

// o express interpreta as rotas como Middlewares, por isso o use
app.use(routes);

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
