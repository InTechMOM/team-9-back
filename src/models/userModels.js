import { Schema, model} from "mongoose";

const usersSchema = new Schema({
  name: String,
  lastName: String,
  email: { type: String, unique: true },
  rol: String
}, {
  timestamps: true,
  versionKey: false
});

export default model('Users', usersSchema);