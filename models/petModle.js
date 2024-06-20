const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
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
        type: String,
        required: true,
        trim: true
    },
    contactInfo: {
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        }
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;