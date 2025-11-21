const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yml'));

// Custom Swagger options
const swaggerOptions = {
  customCss: `
    .swagger-ui .topbar { display: none }
    .swagger-ui .info { margin: 20px 0; }
    .swagger-ui .scheme-container { background: #fafafa; }
  `,
  customSiteTitle: "My Express API Documentation",
  customfavIcon: "/assets/favicon.ico",
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    tryItOutEnabled: true,
    defaultModelsExpandDepth: 2,
    defaultModelExpandDepth: 2
  }
};

module.exports = {
  swaggerDocument,
  swaggerOptions
};