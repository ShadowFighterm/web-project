const bookingServices = require('../services/bookings');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await bookingServices.getAllBookings();
        res.status(200).json(bookings);
    } catch (err) {
        console.error(err); 
        res.status(404).json({ message: err.message });
    }
};

exports.addBooking = async (req, res) => {
    try {
        const {
            userId, 
            listingId,
            checkIn,
            checkOut,
            price
        } = req.body;
        const newBooking= await bookingServices.addBooking(userId, listingId, checkIn, checkOut, price);
        res.status(201).json(newBooking);
    } catch (err) {
        console.error(err); 
        res.status(404).json({ message: err.message });
    }
}