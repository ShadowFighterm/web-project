const ListingServices = require('../services/listings');

exports.getAllListings = async (req, res) => {
    try {
        const listings = await ListingServices.getAllListings();
        res.status(200).json(listings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

exports.getListingById = async (req, res) => {
    try {
        const listingId = req.params.id;
        console.log("Listing id: ",  listingId);
        const listing = await ListingServices.getListingById(listingId);
        res.status(200).json(listing);
    } catch (err) {
        console.error(err); 
        res.status(404).json({ message: err.message });
    }
};

exports.addListing = async (req, res) => {
    try {
        const {
            title, 
            img,
            location,
            rooms,
            rating,
            reviews,
            hostedByImg,
            hostedBy,
            hostDetails,
            price,
            benefits,
            description
        } = req.body;
        const newListing = await ListingServices.addListing(title, img, location, rooms, rating, reviews, hostedByImg, hostedBy, hostDetails, price, benefits, description);
        res.status(201).json(newListing);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteListing = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedListing = await ListingServices.deleteListing(id);
        res.status(200).json(deletedListing);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
};
 