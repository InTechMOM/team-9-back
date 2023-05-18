import Video from "../../models/videoModels.js";

const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).json({message: "Video not found"});
  }
  const deletedVideo = await Video.findByIdAndDelete(id);
  return res.status(200).json(deletedVideo);
};

export default deleteVideo;