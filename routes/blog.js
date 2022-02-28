const express = require("express");
const blogRouter = express.Router();
const Blog = require("../models/blog");

blogRouter.get("/", (req, res, next) => {
    Blog.find({ user: req.user._id }, (err, blogs) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(blogs);
    });
});

blogRouter.post("/", (req, res, next) => {
    const blog = new Blog(req.body);
    blog.user = req.user._id;
    blog.save(function (err, newBlog) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newBlog);
    });
});

blogRouter.get("/:blogId", (req, res, next) => {
    Blog.findOne({ _id: req.params.blogId, user: req.user._id }, (err, blog) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!blog) {
            res.status(404)
            return next(new Error("No blog item found."));
        }
        return res.send(blog);
    });
});

blogRouter.put("/:blogId", (req, res, next) => {
    Blog.findOneAndUpdate(
        { _id: req.params.blogId, user: req.user._id },
        req.body,
        { new: true },
        (err, blog) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(blog);
        }
    );
});

blogRouter.delete("/:blogId", (req, res, next) => {
    Blog.findOneAndDelete({ _id: req.params.blogId, user: req.user._id }, (err, blog) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(blog ? blog : 'No record found');
    });
});

module.exports = blogRouter;
