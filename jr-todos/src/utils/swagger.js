const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'jr tasks',
      version: '1.0',
      contact: {
        name: 'mason',
        email: 'example.com',
      },
      description: 'description',
    },
  },
  apis: ['src/controllers/*.js'],
});
