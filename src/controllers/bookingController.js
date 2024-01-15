const Booking = require('../models/booking');
const Class = require('../models/class');
const User = require('../models/user');

const bookingController = {
    createBooking: async (req, res) => {
        console.log(req.body);
        try {
            const { userId, classId } = req.body;
            const newBooking = await Booking.create({ user: userId, class: classId });
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAllBookings: async (req, res) => {
        try {
            const bookings = await Booking.find().populate('user').populate('class');
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getBookingByUserId: async (req, res) => {
        try {
            const bookings = await Booking.find({ user: req.params.userId });
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = bookingController;
