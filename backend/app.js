const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const listingsRoutes = require('./routes/listings');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api', listingsRoutes);
app.use('/api', bookingRoutes);

module.exports = app;