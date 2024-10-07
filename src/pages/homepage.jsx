import Navbar from "../components/navbar.jsx";
import SearchBox from "../components/searchbox.jsx";
import Categories from "../components/categories.jsx";
import Footer from "../components/footer.jsx";
import ListingCards from "../components/listingcards.jsx";

function Homepage(){
    return (
        <div>
            <Navbar />
            <SearchBox />
            <Categories />
            <ListingCards />
            <Footer />
        </div>
    );
}

export default Homepage