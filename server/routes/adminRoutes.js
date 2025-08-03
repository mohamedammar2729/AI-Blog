import express from "express";
import {
  adminLogin,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
  deleteCommentById,
  approveCommentById,
} from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/dashboard", auth, getDashboard);
adminRouter.delete("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);

export default adminRouter;
