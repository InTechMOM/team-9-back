
import Joi from 'joi'
function createVideoSchema(req, res, next) {
const createSchema =  Joi.object({
  url: Joi.string()
    .required(),
  title: Joi.string()
    .required()
    .min(3)
    .max(100),
  studentEmail: Joi.string()
    .email()
    .required(),
  teacherEmail: Joi.string()
    .email()
    .required(),
  description: Joi.string()
      .required()
      .min(3)
      .max(500)
})
 //Validación


 validateRequest(req, next, createSchema);}

 function validateRequest(req, next, schema) {
  const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
      next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
  } else {
      req.body = value;
      next();
  }
}

export default createVideoSchema;

//const validateVideo = (request, response, next) => {
//  console.log("error no se valida");
//  try { 
 // const validatedVideo = createVideoSchema.validate(request.body);
// if (validatedVideo.error) {
//    response.status(400).json({ error: validateVideo.error});
 // } else { next();
//  }
//} catch (error) { console.log (error);
//  response.status(500).json({error: 'Internal Server Error'});

//}
//}
//export default validateVideo;

