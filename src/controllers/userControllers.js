import Users from '../models/userModels.js'

//Create user
export const createusers = async (request, response) => {
  const {name, lastname, email, rol} = request.body;
  const newUser= new Users({name, lastname, email, rol});
  const userSaved = await newUser.save();
  response.json(userSaved);
}

//Get all users
export const getusers = async (request, response) => {
  const userGet = await Users.find();
  response.json(userGet);
}

//Get user
export const getusersById = async (request, response) => {
  const userGetById = await Users.findById(request.params.usersId);
  response.json(userGetById);
}

//Update user
export const updateusersById = async (request, response) => {
  const userUpdate = await Users.findByIdAndUpdate(request.params.usersId, request.body, {
    new: true
  });
  response.json(userUpdate);
}

//Delete user
export const deleteusersById = async (request, response) => {
  await Users.findByIdAndDelete(request.params.usersId);
  response.json("user delete");
}