const YAML = require('yamljs');
const path = require('path');

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yml'));

// Custom Swagger options
const swaggerOptions = {
    customCss:'.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl: CSS_URL,
};

module.exports = {
  swaggerDocument,
  swaggerOptions
};
