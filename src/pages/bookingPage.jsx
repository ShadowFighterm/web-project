import Booking from "../components/booking";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Bookingpage = () => {
    return (
        <div>
            <div style={{borderBottom: "1px solid #e0e0e0", paddingBottom: "20px", paddingTop: "10px", marginBottom: "30px"}}>
                <Navbar isFixed={false} showBtn={false}/>
            </div>
            <Booking />
            <Footer showLinks={false}/>
        </div>
    )
}

export default Bookingpage;