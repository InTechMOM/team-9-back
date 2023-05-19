import Video from "../../models/videoModels.js"


export const videoQualificationById = async (req, res, next) => {
  try {
  const videoQualification = await Video.findByIdAndUpdate(req.params.videosId, req.body,{
    new: true
  }); 
  if (!videoQualification) {
    return res.status(404).json({
      message:"Video Not Found"})
    }
    return res.status(201).json({
      qualified:("Ok"),
      data: videoQualification
      })
    } catch (error) { 
      next (error);
    };
}
