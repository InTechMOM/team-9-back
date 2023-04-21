import { Schema, model} from "mongoose";

const usersSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  rol: String
}, {
  timestamps: true,
  versionKey: false
});

export default model('Users', usersSchema);