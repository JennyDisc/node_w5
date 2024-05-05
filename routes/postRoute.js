const express = require('express');
const router = express.Router();
const PostController = require("../controller/postController");
const handleErrorAsync = require("../service/handleErrorAsync");

router.get('/', function (req, res, next) {
  PostController.getPosts(req, res);
});

// 縮寫
// router.get('/', PostController.getPosts) 

router.post('/', function handleErrorAsync(req, res, next) {
  PostController.postPosts(req, res, next);
});

router.delete('/', function (req, res, next) {
  PostController.deleteAllPosts(req, res, next);
});

router.delete('/:id', function (req, res, next) {
  PostController.deletePosts(req, res, next);
});

router.patch('/:id', function handleErrorAsync(req, res, next) {
  PostController.patchPosts(req, res, next);
});

module.exports = router;
