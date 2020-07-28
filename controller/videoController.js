import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    //throw Error("에러!")
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
    const {
        query:{term: serchingBy}
    } = req;
    res.render("search", { pageTitle: "Search", serchingBy, videos});
};

export const getUpload = (req, res) => 
  res.render("upload", { pageTitle: "Upload"});
  
export const postUpload = async (req, res) => {
  const{
    body: { title, description },
    file: { path }
  } = req;
    
  // To Do : upload and save video
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => {
  console.log(req.params);
  res.render("videoDetail", { pageTitle: "Video Detail"});
};

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});


