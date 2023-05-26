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
  const { emailTeacher, emailStudent, qualified, tittle } = request.query;
  const filters = {
      ...emailTeacher && { emailTeacher },
      ...emailStudent && { emailStudent },
      ...tittle && { tittle },
      ...qualified && { assessment: { ...qualified === 'true' ? { $exists: true } : { $exists: false } }
      }
  }
console.log(typeof(qualified))
  console.log(filters)
  console.log(qualified==='true')
  const video = await Video.find(filters);
  return response.status(200).json(video);
};

export  { getVideos, getVideoById };