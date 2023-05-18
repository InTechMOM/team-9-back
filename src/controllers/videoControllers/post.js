import Users from "../../models/userModels.js";
import Video from "../../models/videoModels.js";
import { getUsersById } from "../users/userControllers.js";




const uploadVideo = async (req, res) => {
  try{

    const student = await Users.findOne({ email: request.body.studentEmail , rol: "student" });
    if (!student){
      return response.status(404).json({error: "Student not found"});
    }
    const teacher = await Users.findOne({ email: request.body.teacherEmail , rol: "teacher" });
    if (!teacher){
      return response.status(404).json({error: "Teacher not found"});
    }

  const newVideo= new Video({
    url: req.body.url,
    title: req.boy.title,
    student: student._id,
    teacher: teacher._id,
    description: req.body.description, 
  });
  const videoSaved = await newVideo.save();
  return response.status(201).json(videoSaved);


  } catch (error){
    console.log (error);
    let{details} = error;
response.status(500).json({ error});
  }
}

export default uploadVideo;

