import global from "../components/global.module.css";
import listingcards from "../components/listingcards.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

function ListingCards() {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/listings')
            .then(response => setListings(response.data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    return (
        <div class={global.center}>
            <div class={`${global.horizontalFlex} ${listingcards.listingcardsContainer}`}>
                {listings.map((listing, index) => {
                    return (
                        <div class={`${global.verticalFlex} ${listingcards.listingCard}`}>
                            <div>
                                <img class={listingcards.listingImage} src={listing.img} alt="" />
                            </div>
                            <div>
                                <h1>{listing.title}</h1>
                                <h2>{listing.hosted_by}</h2>
                                <h1>{listing.status}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListingCards;