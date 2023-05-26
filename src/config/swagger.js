import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MVP IntechMom',
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://team-9-back.onrender.com/"
      }
    ]
  },
  apis: [
    './src/routes/*.js',
  ], 
};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);