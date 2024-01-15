const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    instructor: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Open', 'Intermediate', 'Advanced', 'Professional']
    },
    startTime: {
        type: Date,
        required: true
    },
    length: {
        type: Number, // length in minutes
        required: true
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
