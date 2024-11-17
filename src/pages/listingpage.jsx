import Footer from "../components/footer";
import Listing from "../components/listing";
import Navbar from "../components/navbar";
import SearchBox from "../components/searchbox";


function Listingpage(){
    return (
        <div>
            <Navbar />
            <SearchBox />
            <Listing />
            <Footer />
        </div>
    )
}

export default Listingpage;