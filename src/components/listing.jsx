import ListingImages from "./listingImages";
import style from "./listing.module.css";
import { FaBed, FaDollarSign, FaFunnelDollar, FaHeart, FaLock, FaShare, FaStar, FaTshirt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "./bookingForm";

// Icon mapping for benefits
const iconMap = {
    FaBed: <FaBed />,
    FaTshirt: <FaTshirt />,
    FaPerson: <FaPerson />,
    FaLock: <FaLock />
};

function Listing() {
    const { id } = useParams(); // Get the id from the URL
    const [listing, setListing] = useState(null); // Initially null, waiting for the backend data
    const [soldOut, setSoldOut] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [nights, setNights] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    // Fetch the listing data from the backend when `id` changes
    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/listings/${id}`);
                setListing(response.data); // Set the listing data from backend
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchListing();
    }, [id]);

    // Check if the listing is sold out
    useEffect(() => {
        if (listing && listing.price === null) {
            setSoldOut(true);
        } else {
            setSoldOut(false);
        }
    }, [listing]); // Trigger when `listing` changes

    // Update total price when the number of nights changes
    useEffect(() => {
        if (listing && listing.price && nights) {
            setTotalPrice(listing.price * nights); // Calculate total price
        }
    }, [listing, nights]); // Trigger when `listing` or `nights` changes

    // Calculate the number of nights based on check-in and check-out dates
    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const diffTime = Math.abs(checkOutDate - checkInDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
            setNights(diffDays); // Set the number of nights
        }
    }, [checkInDate, checkOutDate]);

    // Handle date change
    const handleDateChange = (checkIn, checkOut) => {
        setCheckInDate(checkIn);
        setCheckOutDate(checkOut);
    };

    // If `listing` is still null, show a loading indicator
    if (!listing) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <div>{listing.title}</div>
                <div>
                    <button>
                        <FaShare />
                        Share
                    </button>
                    <button>
                        <FaHeart />
                        Save
                    </button>
                </div>
            </div>
            <div>
                <ListingImages img={listing.img} />
            </div>
            <div className={style.details}>
                <div>
                    <div>{listing.location}</div>
                    <div>{listing.rooms.join(" • ")}</div>
                </div>
                <div className={style.rating}>
                    <FaStar />
                    {listing.rating} •
                    <span>{listing.reviews} reviews</span>
                </div>
            </div>
            <div className={style.requestCardContainer}>
                {
                    soldOut ? (
                        <div className={style.requestCard}>
                            Sold out
                            <button disabled={soldOut} className={style.requestBtn}>Request</button>
                        </div>
                    ) : (
                        <div className={style.requestCard}>
                            <div>
                                <div>${listing.price}</div>
                                <div>night</div>
                            </div>
                            <div className={style.checkInOut}>
                                <BookingForm onDateChange={handleDateChange} />
                            </div>
                            <button className={style.requestBtn}>Request</button>
                            <div className={style.disclaimer}>You won't be charged yet</div>
                            <div className={style.priceCalContainer}>
                                <div>${listing.price} x {nights} nights</div>
                                <div>${totalPrice}</div>
                            </div>
                            <div className={style.totalPriceContainer}>Total before taxes: <span>${totalPrice}</span></div>
                        </div>
                    )
                }

            </div>
            <div className={style.hostedByContainer}>
                <div>
                    <div>
                        <img
                            src={listing.hostedByImg}
                            alt="Hosted by"
                        />
                    </div>
                    <div>
                        <div>Hosted by {listing.hostedBy}</div>
                        <div>{listing.member}</div>
                    </div>
                </div>
                <div>
                    {listing.benefits.map((benefit, index) => (
                        <div key={index}>
                            <div>{iconMap[benefit.icon]}</div>
                            <div>
                                <div>{benefit.title}</div>
                                <div>{benefit.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <div className={style.description}>{listing.description}</div>
            </div>
        </div>
    );
}

export default Listing;
