const express = require('express');
const bookingController = require('../controllers/bookingController');
const { authenticateUser, checkIfAdmin } = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateUser, bookingController.createBooking);
router.get('/', authenticateUser, checkIfAdmin, bookingController.getAllBookings);
router.get('/:userId', authenticateUser, bookingController.getBookingByUserId);

module.exports = router;
