const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookings');
// API Endpoints
// Get all listings
router.get('/admin/bookings', bookingController.getBookings);
router.post('/bookings', bookingController.addBooking);

module.exports = router;

   