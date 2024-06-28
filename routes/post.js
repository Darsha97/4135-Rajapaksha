const express = require('express');
const Posts = require('../model/posts');
const router = express.Router();

// Create a new post
router.post('/post', async (req, res) => {
  try {
    const {
      fullname,
      email,
      phonenumber,
      vehicaletype,
      vehicalenumber,
      selectservice,
      branch,
      fromdate,
      comments
    } = req.body;

    if (!fullname || !email || !phonenumber || !vehicaletype || !vehicalenumber || !selectservice || !branch || !fromdate || !comments) {
      return res.status(400).json({
        message: "Please provide all required fields."
      });
    }

    const newPost = {
      fullname,
      email,
      phonenumber,
      vehicaletype,
      vehicalenumber,
      selectservice,
      branch,
      fromdate,
      comments
    };

    const createdPost = await Posts.create(newPost);
    return res.status(201).json(createdPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message
    });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Posts.find();
    return res.status(200).json({
      success: true,
      existingPosts: posts
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
});
router.get('/post/:id', async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the URL parameter
    const post = await Posts.findById(postId);

    if (!post) {
      // If the post doesn't exist, return a 404 Not Found response
      return res.status(404).json({
        success: false,
        message: 'Post not found',
      });
    }

    return res.status(200).json({
      success: true,
      post: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// Delete a post by ID
router.delete('/post/:id', async (req, res) => {
  try {
    const deletedPost = await Posts.findByIdAndRemove(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }
    return res.status(200).json({
      message: "Post deleted successfully",
      deletedPost
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
});

// Update a post by ID
router.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }
    return res.status(200).json({
      message: "Post updated successfully",
      updatedPost
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
