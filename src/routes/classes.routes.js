const express = require('express');
const classController = require('../controllers/classController'); // Adjust the path as needed
const router = express.Router();

router.post('/', classController.createClass);
router.get('/', classController.getAllClasses);
router.get('/:id', classController.getClassById);
router.put('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;