const listingsMod = require('../models/listings');

class ListingServices {
    // Get all listings
    static async getAllListings() {
        try {
            const listings = await listingsMod.find(); // Fetch all listings from the database
            return listings;
        } catch (err) {
            console.error('Error fetching listings:', err);
            throw new Error('Unable to fetch listings');
        }
    }

    // Get a single listing by ID
    static async getListingById(id) {
        try {
            const listing = await listingsMod.findOne({ listingId: id }); // Change _id to listingId if needed
            if (!listing) throw new Error('Listing not found');
            return listing;
        } catch (err) {
            console.error(`Error fetching listing with ID ${id}:`, err);
            throw new Error('Unable to fetch listing');
        }
    }

    // Add a new listing
    static async addListing(title, img, location, rooms, rating, reviews, hostedByImg, hostedBy, hostDetails, price, benefits, description) {
        try {
            const newListing = new listingsMod({title, img, location, rooms, rating, reviews, hostedByImg, hostedBy, hostDetails, price, benefits, description}); // Create a new listing document
            const savedListing = await newListing.save(); // Save the listing to the database
            return savedListing;
        } catch (err) {
            console.error('Error adding listing:', err);
            throw new Error('Unable to add listing');
        }
    }

    // Delete a listing by ID
    static async deleteListing(id) {
        try {
            const deletedListing = await listingsMod.findByIdAndDelete(id); // Delete the listing by ID
            if (!deletedListing) throw new Error('Listing not found for deletion');
            return deletedListing;
        } catch (err) {
            console.error(`Error deleting listing with ID ${id}:`, err);
            throw new Error('Unable to delete listing');
        }
    }
}

module.exports = ListingServices;
