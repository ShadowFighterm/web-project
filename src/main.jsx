import { createRoot } from "react-dom/client";
import Navbar from "./navbar.jsx";
import SearchBox from "./searchbox.jsx";

const root = document.getElementById('root');
createRoot(root).render(
    <div>
        <Navbar />
        <SearchBox />
    </div>
    
);