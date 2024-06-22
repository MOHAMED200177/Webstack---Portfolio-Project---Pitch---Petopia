const Cat = require('./../models/petModle');
const APIFeatures = require('./../utils/apiFeatures');
const uploud = require('./../utils/uploudImg');


exports.createCat = async (req, res) => {
    try {
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
            contactInfo: {
                email: req.body.contactInfo.email,
                phone: req.body.contactInfo.phone
            }
        };

        const newCat = await Cat.create(newCatData);

        res.status(201).json({
            status: 'success',
            data: {
                cat: newCat
            }
        });
    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err.message
        });
    }
};


exports.getAllCats = async (req, res) => {
    try {
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
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};




exports.getCat = async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                cat
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            massege: err
        });
    }
};



exports.updateCat = async (req, res) => {
    try {
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
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            massege: err
        });
    }
};

exports.deleteCat = async (req, res) => {
    try {
        await Cat.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            massege: err
        });
    }
};