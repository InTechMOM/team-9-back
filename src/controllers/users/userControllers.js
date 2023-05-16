import Users from '../../models/userModels.js'

//Create user
export const createUsers = async (request, response) => {
  const {name, lastName, email, rol} = request.body;
  const newUser= new Users({name, lastName, email, rol});
  const userSaved = await newUser.save();
  response.status(200).json(userSaved);
}

//Get all users
export const getUsers = async (request, response) => {
  const userGet = await Users.find();
  response.json(userGet);
}

//Get user
export const getUsersById = async (request, response) => {
  const userGetById = await Users.findById(request.params.usersId);
  response.json(userGetById);
}

//Update user
export const updateUsersById = async (request, response) => {
  const userUpdate = await Users.findByIdAndUpdate(request.params.usersId, request.body, {
    new: true
  });
  response.json(userUpdate);
}

//Delete user
export const deleteUsersById = async (request, response) => {
  await Users.findByIdAndDelete(request.params.userId);
  response.json("user delete");
}