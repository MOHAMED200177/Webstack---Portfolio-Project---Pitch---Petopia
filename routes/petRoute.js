const express = require('express');
const catController = require('./../controllers/petController');

const router = express.Router();

router
    .route('/')
    .get(catController.getAllCats)
    .post(catController.createCat);

router
    .route('/:id')
    .get(catController.getCat)
    .patch(catController.updateCat)
    .delete(catController.deleteCat);

module.exports = router;