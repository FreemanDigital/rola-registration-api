const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoutes = require('./routes/users.routes');
const classRoutes = require('./routes/classes.routes');
const bookingRoutes = require('./routes/bookings.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('This is the root route!'));
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/classes', classRoutes);
app.use('/api/v1/bookings', bookingRoutes);

module.exports = app;