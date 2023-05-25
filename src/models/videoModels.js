import {Schema, model} from 'mongoose';

const videoSchema = new Schema(
  {
    url: {
      type: String,
      unique: true,
      validate: {
        validator: function(v) {
             return /^https:\/\/www.youtube.com\/.*$/.test(v);
        },
        message: props => `${props.value} is not a valid youtube link.`
     },
     required: [true, 'Youtube video link is required.']
    },
    title: {
      type: String,
      unique: true,
      require: true
    },
    emailStudent: {
      type: String,
      require: true,
    },
    emailTeacher: { 
      type: String, 
      require: true,
    },
    description: {
      type: String,
      require: true
    },
    generalObservations:{
      type: String,
      require:false
    },
    generalQualification: {
      type: Number,
      min: 0,
      max: 5,
      require:false
    },
    assessment:{
      type: [{
    // skills:[{
        collaborativeWork: {
          toBe: {
            type: Number,
            min: 0,
            max: 5, 
            require:false
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
        },
        creativity: {
          toBe: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
        },
        communication: {
          toBe: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
        },
        criticalThinking: {
          toBe: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5,
            require:false
          },
        },
      }],
    default:undefined
    }
     
    },
  
  { 
    timestamps: true,    
 }
);

export default model('Video',videoSchema);