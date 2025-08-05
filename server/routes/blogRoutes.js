import express from "express";
import {
  addBlog,
  addComment,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  getComments,
  toggleBlogPublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// we will use middleware to parse image uploaded from frontend using multer
// will add another middleware to protect the route only for admin users
blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlog);
blogRouter.post("/toggle-publish", auth, toggleBlogPublish);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getComments);

export default blogRouter;
