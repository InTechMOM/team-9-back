import mongoose from 'mongoose';
import Users from '../../models/userModels.js'

//Create user
export const createUsers = async (request, response) => {
  const {name, lastName, email, rol} = request.body;
  const newUser= new Users({name, lastName, email, rol});
  const userSaved = await newUser.save();
  if ({name, lastName, email, rol} == "") {
    response.status(500).json({message: "Internal Server Error"});
  }
  else {
    response.status(200).json(userSaved);
  }
}

//Get all users
export const getUsers = async (request, response) => {
  const userGet = await Users.find();
  response.status(200).json(userGet);
}

//Get user
export const getUsersById = async (request, response) => {
  const userGetById = await Users.findById(request.params.usersId);
  if (!mongoose.isValidObjectId(userGetById)) {
    console.log(response.status(422).json({message: "Invalid Id"}));
  }
  if (!userGetById) {
    console.log(response.status(404).json("User not found"));
  }
  else {
    console.log(response.json(userGetById));
  } 
}

//Update user
export const updateUsersById = async (request, response) => {
  const userUpdate = await Users.findByIdAndUpdate(request.params.usersId, request.body, {
    new: true
  });
  if (!mongoose.isValidObjectId(userUpdate)) {
    response.status(422).json({message: "Invalid Id"});
  }
  if (!userUpdate) {
    response.status(404).json("User not found");
  }
  else {
  response.status(200).json(userUpdate);
  }
}

//Delete user
export const deleteUsersById = async (request, response) => {
  await Users.findByIdAndDelete(request.params.userId);
  response.status(200).json("user delete");
}