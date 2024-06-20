const Cat = require('./../models/petModle');


exports.creatCat = async (req, res) => {
    try {
        const newCat = await Cat.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                cat: newCat
            }
        });
    } catch (err) {
        res.status(401).json({
            status: 'fail',
            massege: err
        }
        )
    };
};

exports.getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find();

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
            massege: err
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