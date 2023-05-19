
import Joi from 'joi'

export const createVideoSchema =  Joi.object({
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
      .max(500),
  assessment: ({
    skills: ({
      collaborativeWork: {
        toBe: Joi.number()
          .min(0)
          .max(5),
        toKnow: Joi.number()
          .min(0)
          .max(5),
        toDo: Joi.number()
          .min(0)
          .max(5),
      },
      creativity: {
        toBe: Joi.number()
          .min(0)
          .max(5),
        toKnow: Joi.number()
          .min(0)
          .max(5),
        toDo: Joi.number()
          .min(0)
          .max(5),
      },
      communication: {
        toBe: Joi.number()
          .min(0)
          .max(5),
        toKnow: Joi.number()
          .min(0)
          .max(5),
        toDo: Joi.number()
          .min(0)
          .max(5),
      },
      criticalThinking: {
        toBe: Joi.number()
          .min(0)
          .max(5),
        toKnow: Joi.number()
          .min(0)
          .max(5),
        toDo: Joi.number()
          .min(0)
          .max(5),
      },
    }),
    generalQualification: Joi.number()
      .min(0)
      .max(5),
    generalObservations: Joi.string()
    .min(3)
    .max(500)    
    }) 
})



export const updateVideoSchema =  Joi.object({
assessment: ({
  skills: ({
    collaborativeWork: {
      toBe: Joi.number()
        .min(0)
        .max(5),
      toKnow: Joi.number()
        .min(0)
        .max(5),
      toDo: Joi.number()
        .min(0)
        .max(5),
    },
    creativity: {
      toBe: Joi.number()
        .min(0)
        .max(5),
      toKnow: Joi.number()
        .min(0)
        .max(5),
      toDo: Joi.number()
        .min(0)
        .max(5),
    },
    communication: {
      toBe: Joi.number()
        .min(0)
        .max(5),
      toKnow: Joi.number()
        .min(0)
        .max(5),
      toDo: Joi.number()
        .min(0)
        .max(5),
    },
    criticalThinking: {
      toBe: Joi.number()
        .min(0)
        .max(5),
      toKnow: Joi.number()
        .min(0)
        .max(5),
      toDo: Joi.number()
        .min(0)
        .max(5),
    }
  }),
  generalQualification: Joi.number()
    .min(0)
    .max(5),
  generalObservations: Joi.string()
  .min(3)
  .max(500)    
  }) 
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



