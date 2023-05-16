import User from "../../../models/user.js";
import Video from "../../models/videoModels.js";




const uploadVideo = async (request, response) => {
  try{
  const {url, title,  description} = request.body;
  const teacherEmail = await getUserBy({email: req.body.emailTeacher, rol: 'teacher'});
  const studentEmail = await getUserBy({email: req.body.emailStudent, rol: 'student'});

  //if(!student?.length || teacher.length){
    //return res.status(400).json({message: 'Teacher or student incorrect'});
//}
  const newVideo= new Video({url, title, studentEmail, teacherEmail,  description});
  const videoSaved = await newVideo.save();
  return response.status(201).json(videoSaved);
  } catch (error){
    console.log (error);
    let{details} = error;
response.status(500).json({ error});
  }
}

export default uploadVideo;

