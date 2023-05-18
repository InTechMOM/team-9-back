
import Joi from 'joi'

const createVideoSchema =  Joi.object({
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

const validateVideo = (request, response, next) => {
 
 try { 
 const validatedVideo = createVideoSchema.validate(request.body);
if (validatedVideo.error) {
  return response.status(400).json({ error: validatedVideo.error.details});
 } else { next();
 }
} catch (error) { console.log (error);
 return response.status(500).json({error: 'Internal Server Error'});

}
}
export default validateVideo;
