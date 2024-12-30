import global from "../components/global.module.css";
import listingcards from "../components/listingcards.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ListingCards() {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        axios.get('http://localhost:5000/api/listings')
            .then(response => setListings(response.data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    // Function to handle card click
    const handleCardClick = (id) => {
        navigate(`/listings/${id}`); // Navigate to the Listing page with the id
    };

    return (
        <div className={global.center}>
            <div className={`${global.horizontalFlex} ${listingcards.listingcardsContainer}`}>
                {listings.map((listing) => {
                    return (
                        <div 
                            key={listing.listingId} 
                            className={`${global.verticalFlex} ${listingcards.listingCard}`} 
                            id={listing.listingId}
                            onClick={() => handleCardClick(listing.listingId)} // Add onClick handler
                        >
                            <div>
                                <img className={listingcards.listingImage} src={listing.img} alt="" />
                            </div>
                            <div>
                                <h1>{listing.title}</h1>
                                <h2>{listing.hostedBy}</h2>
                                <h1>{listing.price ? `$${listing.price} per night` : "Sold out"}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListingCards;
