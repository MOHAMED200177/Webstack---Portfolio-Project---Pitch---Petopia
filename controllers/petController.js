const Cat = require('./../models/petModle');
const APIFeatures = require('./../utils/apiFeatures');
const multer = require('multer');
const path = require('path');
const upload = require('./../utils/uploudImg');
const catchAsync = require('./../utils/catchAsync');
const fs = require('fs');



exports.uploadCatImage = upload.single('image');

exports.createCat = catchAsync(async (req, res) => {
    let imageUrl = '';
    if (req.file) {
        imageUrl = `/uploads/${req.file.filename}`;
    }

    const newCatData = {
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        description: req.body.description,
        adoptionStatus: req.body.adoptionStatus || 'Available',
        imageUrl: imageUrl,
        email: req.body.email,
        phone: req.body.phone
    };

    const newCat = await Cat.create(newCatData);

    res.status(201).json({
        status: 'success',
        data: {
            cat: newCat
        }
    });
});



exports.getAllCats = catchAsync(async (req, res) => {

    let cats;
    if (Object.keys(req.query).length === 0) {
        cats = await Cat.find();
    } else {
        const features = new APIFeatures(Cat.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        cats = await features.query;
    }

    res.status(200).json({
        status: 'success',
        results: cats.length,
        data: {
            cats
        }
    });
});




exports.getCat = catchAsync(async (req, res) => {

    const cat = await Cat.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            cat
        }
    });
});



exports.updateCat = catchAsync(async (req, res) => {

    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            cat
        }
    });
});

exports.deleteCat = catchAsync(async (req, res) => {

    // 1. Find the cat to delete
    const cat = await Cat.findById(req.params.id);

    if (!cat) {
        return res.status(404).json({
            status: 'fail',
            message: 'Cat not found'
        });
    }

    // 2. Delete image from file system
    if (cat.imageUrl) {
        const imagePath = path.join(__dirname, '../uploads', cat.imageUrl.split('/').pop());
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }

    // 3. Delete the cat from the database
    await Cat.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success',
        data: null
    });
});