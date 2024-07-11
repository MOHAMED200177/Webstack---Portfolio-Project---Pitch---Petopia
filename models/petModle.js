const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name for Cat'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'please provide a age for Cat']
    },
    breed: {
        type: String,
        required: [true, 'please provide a bread for Cat'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'please provide a description for Cat'],
        trim: true
    },
    adoptionStatus: {
        type: String,
        enum: ['Available', 'Adopted', 'Pending'],
        default: 'Available'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: [String],
        validate: {
            validator: function (val) {
                return val.length <= 3;
            },
            message: 'A service can have up to 4 images'
        }
    },
    location: {
        type: String,
        required: [true, 'Please provide a location']
    },
    email: {
        type: String,
        required: [true, 'please provide a email'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
        validate: {
            validator: function (val) {
                return /\d{10,15}/.test(val);
            },
            message: 'Please provide a valid phone number'
        }
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
