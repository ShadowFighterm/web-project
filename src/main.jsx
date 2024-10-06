import { createRoot } from "react-dom/client";
import Navbar from "./navbar.jsx";
import SearchBox from "./searchbox.jsx";
import Categories from "./categories.jsx";
import Footer from "./footer.jsx";

const root = document.getElementById('root');
createRoot(root).render(
    <div>
        <Navbar />
        <SearchBox />
        <Categories />
        <Footer />
    </div>
);