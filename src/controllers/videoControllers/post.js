//import User from "../../../models/user.js";
import Video from "../../models/videoModels.js";


//const newVideo = async (req, res, next) => {
  //const videoModel = new Video();

  //const { url, title, description} = req.body;
  //const videoToSave = { url, title, description};
 
  //try {
   // const saveVideo = await videoModel.save(videoToSave)
   // res.status(200).json({
   //   upload:("Ok"),
    //  data: saveVideo
   // })
  //} catch (error) { 
  //  next (error)
 // }    
//}

const uploadVideo = async (request, response) => {
  try{
  const {url, title, description} = request.body;
  const newVideo= new Video({url, title, description});
  const videoSaved = await newVideo.save();
  return response.status(201).json(videoSaved);
  } catch (error){
    console.log (error);
    let{details} = error;
res.status(500).json({ error});
  }
}

export default uploadVideo;
//export default newVideo;
