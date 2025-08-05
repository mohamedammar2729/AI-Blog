import jwt from "jsonwebtoken";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";

export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email and password match the admin credentials
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    return res
      .status(200)
      .json({ success: true, message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({
      createdAt: -1, // sort by latest first
    });
    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).populate("blog").sort({
      createdAt: -1, // sort by latest first
    });
    return res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({})
      .sort({
        createdAt: -1, // sort by latest first
      })
      .limit(5);
    const blogs = await Blog.countDocuments();
    const Comments = await Comment.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });

    const dashboardData = {
      recentBlogs,
      blogs,
      Comments,
      drafts,
    };
    return res.status(200).json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }
    await Comment.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndUpdate(id, { isApproved: true });
    return res.status(200).json({
      success: true,
      message: "Comment approved successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
