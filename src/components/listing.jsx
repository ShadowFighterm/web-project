import ListingImages from "./listingimages";
import style from "./listing.module.css";
import { FaBed, FaHeart, FaLock, FaShare, FaStar, FaTshirt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const iconMap = {
    FaBed: <FaBed />,
    FaTshirt: <FaTshirt />,
    FaPerson: <FaPerson />,
    FaLock: <FaLock />
}

const data = {
    title: "Stay in Prince’s Purple Rain house",
    img: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/34eac43e-9e92-4aaf-97d4-eea9f1d53a88.png?im_w=720&im_q=highq&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3df353c0-ad1c-4248-b31c-c3f6b2053fc4.png?im_w=720&im_q=highq&im_format=avif",
    ],
    location: "Minneapolis, Minnesota, United States",
    rooms: ["4 guests", "2 bedrooms", "2 beds", "2 baths"],
    rating: "5.0",
    reviews: "19",
    hostedByImg: "https://a0.muscache.com/im/pictures/user/User-571409646/original/ea5debfb-2394-444c-ae7a-e30e13363e59.jpeg?im_w=240&im_format=avif",
    hostedBy: "Wendy And Lisa",
    member: "Members of The Revolution",
    price: 55,
    cleaningFee: 26,
    airbnbFee: 46,
    benefits: [
        {
            icon: "FaBed",
            title: "Visit the actual Purple Rain house",
            description: "Sleep in The Kid’s basement bedroom, where your dreams actually come true.",
        },
        {
            icon: "FaTshirt",
            title: "Explore Prince’s legendary wardrobe",
            description: "Wanna see THE suit from the Purple Rain tour? Check the closet and rejoice.",
        },
        {
            icon: "FaPerson",
            title: "Channel your inner superstar",
            description: "Learn how to rock the drums or nail the vocals on our song “Purple Rain.”",
        },
        {
            icon: "FaLock",
            title: "Flex your Prince IQ",
            description: "Are u a Prince fam? Find the secret space, where a purple riddle awaits….",
        },
    ],
};

function Listing() {
    const listing = data; // Assuming we only have one listing for now.
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
                <ListingImages img={data.img}/>
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
                <div className={style.requestCard}>
                    Sold out
                    <button>Request</button>
                </div>
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
            <div className={style.description}></div>
        </div>
    );
}

export default Listing;
