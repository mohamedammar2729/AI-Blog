import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file; // we will parse it using multer in middleware

    // Validate required fields
    if (!title || !description || !category || !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // we will strore the image url on database
    // so we need to use cloud storage like imagekit, cloudinary, etc.

    const fileBuffer = fs.readFileSync(imageFile.path);
    // response will contain the image url
    // and other details like fileId, size, etc.
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimize the image through imagekit
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, // automatically adjust quality
        { format: "webp" }, // convert to webp format
        { width: "1280" }, // resize to 1280px width
      ],
    });

    const image = optimizedImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
