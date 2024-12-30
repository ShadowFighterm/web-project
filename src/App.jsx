import Homepage from "./pages/homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listingpage from "./pages/listingpage.jsx";
import Bookingpage from "./pages/bookingPage.jsx";
import LoginSignupPage from "./pages/loginSignupPage.jsx";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/listings/:id" element={<Listingpage />} />
                    <Route path="/bookings" element={<Bookingpage />} />
                    <Route path="/login-signup" element={<LoginSignupPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App