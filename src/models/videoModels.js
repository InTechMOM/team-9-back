import {Schema, model} from 'mongoose';


const videoSchema = new Schema(
  {
    url: {
      type: String,
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
      require: true
    },
    nameStudent: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      require: true,
    },
    emailTeacher: { 
      type: Schema.Types.ObjectId, 
      ref: 'Users', 
      require: true,
   
    },

    description: {
  
      type: String,
      require: true
    },
    },
  { 
    timestamps: true,    
 }
);

export default model('Video',videoSchema);
