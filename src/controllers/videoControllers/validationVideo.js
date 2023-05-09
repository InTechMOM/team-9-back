import Joi from 'joi'

const createVideoSchema =  Joi.object({
  url: Joi.string()
    .required(),
  title: Joi.string()
    .required()
    .min(3)
    .max(100),
  description: Joi.string()
      .required()
      .min(3)
      .max(500),
})
 //Validación


const validateVideo = (request, response) => {
 console.log("errorrrrr");
  try { 
  const validatedVideo = createVideoSchema.validate(request.body);
  if (validatedVideo.error) {
    response.status(400).json({ error: validateVideo.error});
  } else { next();
  }
} catch (error) { console.log (error);
  response.status(500).json({error: 'Internal Server Error'});

}
}
export default validateVideo;