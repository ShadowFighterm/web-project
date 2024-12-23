import Footer from "../components/footer";
import Listing from "../components/listing";
import Navbar from "../components/navbar";
import SearchBox from "../components/searchbox";


function Listingpage(){
    return (
        <div>
            <div style={{
                width: "100%",
                backgroundColor: "white",
            }}>
                <Navbar isFixed={false}/>
                <SearchBox isScrolledProp={true} />
            </div>
            <div>
                <Listing />
            </div>
            <Footer />
        </div>
    )
}

export default Listingpage;