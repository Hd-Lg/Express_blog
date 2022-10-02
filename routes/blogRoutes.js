import express from "express";
import blogController from "../controllers/blogController";

const router = express.Router();

router.get("/blogs", blogController.blog_index);

module.exports = router;
