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
    assessment: {
      skills:{
        collaborativeWork: {
          toBe: {
            type: Number,
            min: 0,
            max: 5
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5
          },
        },
        creativity: {
          toBe: {
            type: Number,
            min: 0,
            max: 5
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5
          },
        },
        communication: {
          toBe: {
            type: Number,
            min: 0,
            max: 5
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5
          },
        },
        criticalThinking: {
          toBe: {
            type: Number,
            min: 0,
            max: 5
          },
          toKnow: {
            type: Number,
            min: 0,
            max: 5
          },
          toDo: {
            type: Number,
            min: 0,
            max: 5
          },
        },
      },
      generalQualification: {
        type: Number,
        min: 0,
        max: 5
      },
      generalObservations:{
        type: String,
      },
    },
    },
  { 
    timestamps: true,    
 }
);

export default model('Video',videoSchema);
