import Video from "../../models/videoModels.js";

const getVideoById = async (request, response) => {
  const { id } = request.params;
  const video = await Video.findById(id);
  if (!video){
    return response.status(404).json({message: "Video not found"});
  }
  return response.status(200).json(video);
};

const getVideos = async (request, response) => {
  const video = await Video.find();
  return response.status(200).json(video);
};

export  { getVideos, getVideoById };