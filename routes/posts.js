const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get back all post
router.get('/', async (req,res) => {
  // res.send('We are on POST');
  try {
    const allPost = await Post.find();
    res.json(allPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get('/specific', (req,res) => {
//   res.send('We are on Specific');
// });

// Submit apost
router.post('/', async (req, res) => {
  // console.log(req.body);
  const createPost = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await createPost.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post
router.get('/:postId', async (req, res) => {
  try {
    const postById = await Post.findById(req.params.postId);
    res.json(postById);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update Post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;