import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";


const blogRoutes = require("./routes/blogRoutes");

import Blog from "./models/blog.js";
const app = express();
app.set("view engine", "ejs");

// MongoDB
const dbURI = "mongodb://127.0.0.1:27017";
mongoose
	.connect(dbURI)
	.then((result) => {
		console.log("Connected to Database");
		app.listen(3000);
		console.log("Server listening on port 3000");
	})
	.catch((err) => console.log(err));

// Middleware logs & Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Handling requests
app.get("/", (req, res) => {
	res.redirect("/blogs");
});

app.get("/about", (req, res) => {
	res.render("about");
});

// Blog routes

app.use(blogRoutes);

// 404 Page
app.use((req, res) => {
	res.status(404).render("404");
});
