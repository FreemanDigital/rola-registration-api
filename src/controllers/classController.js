const Class = require('../models/class');

const classController = {
    // Create a new class
    createClass: async (req, res) => {
        try {
            const newClass = await Class.create(req.body);
            res.status(201).json(newClass);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get all classes
    getAllClasses: async (req, res) => {
        try {
            const classes = await Class.find();
            res.status(200).json(classes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get a single class by ID
    getClassById: async (req, res) => {
        try {
            const danceClass = await Class.findById(req.params.id);
            if (!danceClass) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(200).json(danceClass);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a class
    updateClass: async (req, res) => {
        try {
            const updatedClass = await Class.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedClass) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(200).json(updatedClass);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a class
    deleteClass: async (req, res) => {
        try {
            const deletedClass = await Class.findByIdAndDelete(req.params.id);
            if (!deletedClass) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
};

module.exports = classController;