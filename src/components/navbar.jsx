import navbar from "../components/navbar.module.css";
import airbnbLogo from "../assets/airbnb_logo.png";
import global from "../components/global.module.css";
import { useState } from "react";
import { FaSearch, FaRegHeart, FaUserCircle } from "react-icons/fa";

function Navbar() {
    const [selectedButton, setSelectedButton] = useState("search");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className={global.center}>
            <nav className={navbar.navbarContainer}>
                <div>
                    <a><img className={navbar.brandLogo} src={airbnbLogo} alt="Airbnb Logo" /></a>
                </div>
                <div>
                    <ul className={navbar.navLinks}>
                        <li><a>Airbnb your home</a></li>
                        <li><a>🌐</a></li>
                        <li className={navbar.loginBtn}><a>☰ 👤</a></li>
                    </ul>
                </div>
                <div className={navbar.mobileBar}>
                    <div onClick={() => handleButtonClick("search")} className={selectedButton === "search" ? navbar.mobileSelected : ""}>
                        <FaSearch className={navbar.iconStyle} />
                        <button>Explore</button>
                    </div>
                    <div onClick={() => handleButtonClick("wishlist")} className={selectedButton === "wishlist" ? navbar.mobileSelected : ""}>
                        <FaRegHeart className={navbar.iconStyle} />
                        <button>Wishlists</button>
                    </div>
                    <div onClick={() => handleButtonClick("login")} className={selectedButton === "login" ? navbar.mobileSelected : ""}>
                        <FaUserCircle className={navbar.iconStyle} />
                        <button>Log in</button>
                    </div>
                </div>
            </nav>
        </div> // main container
    );
}

export default Navbar;
