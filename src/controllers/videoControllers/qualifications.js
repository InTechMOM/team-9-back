import Video from "../../models/videoModels.js"


export const videoQualificationById = async (req, res) => {
  const videoQualification = await Video.findByIdAndUpdate(req.params.videosId, req.body, {
    new: true
  });
  res.json(videoQualification);
}