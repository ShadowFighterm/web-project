const mongoose = require('mongoose');
const { Schema } = mongoose; 
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BookingsSchema = new Schema(
  {
    listingId: {
      type: Schema.Types.ObjectId, // Reference to the listing
      required: [true, 'Listing is required'],
      ref: 'listingsMod'
    },
    userId: {
      type: Schema.Types.ObjectId, // Reference to the user who made the booking
      required: [true, 'User is required'],
      ref: 'UserMod'
    },
    checkIn: {
      type: Date,
      required: [true, 'Check-in date is required'],
    },
    checkOut: {
      type: Date,
      required: [true, 'Check-out date is required'],
    },
    totalPrice: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'canceled'],
      default: 'pending',
    }
  },
  {timestamps: true, collection: 'bookings'}
);

BookingsSchema.plugin(AutoIncrement, { inc_field: 'bookingId' }); // Auto-increment id field

const bookingsMod = mongoose.model('Bookings', BookingsSchema);
module.exports = bookingsMod;
