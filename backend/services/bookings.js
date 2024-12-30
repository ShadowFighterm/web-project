const bookingMod = require('../models/bookings')

class BookingService {
    static async getAllBookings(){
        try {
            const bookings = await bookingMod.find(); // Fetch all listings from the database
            return bookings;
        } catch (err) {
            console.error('Error fetching booking:', err);
            throw new Error('Unable to fetch booking');
        }
    }
    static async addBooking(userId, listingId, checkIn, checkOut, price) {
        try {
            const newBooking = new bookingMod({userId, listingId, checkIn, checkOut, price}); // Create a new listing document
            const savedBooking = await newBooking.save(); // Save the listing to the database
            return savedBooking;
        } catch (err) {
            console.error('Error adding booking:', err);
            throw new Error('Unable to add booking');
        }
    }
}

module.exports = BookingService;