const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument, swaggerOptions } = require('./config');

const app = express();
app.listen(4000,()=>console.log("Running"))
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
