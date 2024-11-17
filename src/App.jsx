import Homepage from "./pages/homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listingpage from "./pages/listingpage.jsx";


const App = () => {
    return (
        <div>
            <Listingpage />
        </div>
    );
}

export default App