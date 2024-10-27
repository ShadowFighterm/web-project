import Navbar from "./navbar";
import SearchBox from "./searchbox";
import Categories from "./categories";
import header from "./header.module.css"

function Header(){
    return(
        <div class={header.header}>
            <Navbar />
            <SearchBox />
            <Categories />
        </div>
    );
}

export default Header;