import Users from "../../models/userModels.js";
import Video from "../../models/videoModels.js";
import { getUsersById } from "../users/userControllers.js";




const uploadVideo = async (req, res) => {
  try{

    const student = await Users.findOne({ email: req.body.studentEmail , rol: "student" });
    if (!student){
      return res.status(404).json({error: "Student not found"});
    }
    const teacher = await Users.findOne({ email: req.body.teacherEmail , rol: "teacher" });
    if (!teacher){
      return res.status(404).json({error: "Teacher not found"});
    }

  const newVideo= new Video({
    url: req.body.url,
    title: req.body.title,
    student: student.email,
    teacher: teacher.email,
    description: req.body.description, 
  });
  const videoSaved = await newVideo.save();
  return res.status(201).json(videoSaved);


  } catch (error){
    console.log (error);
    const{details} = error;
res.status(500).json({ error:details});
  }
}

export default uploadVideo;

