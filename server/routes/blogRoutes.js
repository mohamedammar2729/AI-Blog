import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);
// we will use middleware to parse image uploaded from frontend using multer
// will add another middleware to protect the route only for admin users

export default blogRouter;
