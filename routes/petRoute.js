const express = require('express');
const catController = require('./../controllers/petController');
const multer = require('multer');
const router = express.Router();

router
    .route('/')
    .get(catController.getAllCats)
    .post(catController.uploadCatImage, catController.createCat);

router
    .route('/:id')
    .get(catController.getCat)
    .patch(catController.updateCat)
    .delete(catController.deleteCat);

module.exports = router;
