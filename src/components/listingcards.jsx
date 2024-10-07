import global from "../components/global.module.css";
import listingcards from "../components/listingcards.module.css"

const listingCardsData = [
    {
        title: "Stay in Prince's Purple Rain House",
        hosted_by: "Hosted by Wendy And Lisa",
        status: "Booking closed",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png"
    },
    {
        title: "Sleepover at Polly Pocket's Compact",
        hosted_by: "Hosted by Polly Pocket",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png"
    },
    {
        title: "Playdate at Polly Pocket’s Compact",
        hosted_by: "Hosted by Polly Pocket",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png"
    },
    {
        title: "Go VIP with Kevin Hart",
        hosted_by: "Hosted by Kevin Hart",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg"
    },
    {
        title: "Train at the X-Mansion",
        hosted_by: "Hosted by Jubilee",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg"
    },
    {
        title: "Make core memories with Inside Out 2",
        hosted_by: "Hosted by Joy",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg"
    },
    {
        title: "Go on tour with Feid",
        hosted_by: "Hosted by Feid",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg"
    },
    {
        title: "Design your Incredibles Supesuit",
        hosted_by: "Hosted by Edna Mode",
        status: "Sold out",
        img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg"
    }
]
function ListingCards() {
    return (
        <div class={global.center}>
            <div class={`${global.horizontalFlex} ${listingcards.listingcardsContainer}`}>
                {listingCardsData.map((card, index) => {
                    return (
                        <div class={`${global.verticalFlex} ${listingcards.listingCard}`}>
                            <img class={listingcards.listingImage} src={card.img} alt="" />
                            <h1>{card.title}</h1>
                            <h2>{card.hosted_by}</h2>
                            <h1>{card.status}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListingCards;