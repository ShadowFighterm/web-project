import navbar from "../components/navbar.module.css";
import airbnbLogo from "../assets/airbnb_logo.png";
import global from "../components/global.module.css";
import { useState } from "react";
import { FaSearch, FaRegHeart, FaUserCircle, FaGlobe, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Navbar({ isFixed = true, showBtn = true }) {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState("explore");
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for dropdown menu

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen); // Toggle menu visibility
    };

    const loginSignup = () => {
        navigate('/login-signup')
    }

    return (
        <div className={global.center}>
            <nav style={{ position: isFixed ? "fixed" : "static" }} className={navbar.navbarContainer}>
                <div>
                    <a><img className={navbar.brandLogo} src={airbnbLogo} alt="Airbnb Logo" /></a>
                </div>
                <div>
                    {
                        showBtn ? (
                            <ul className={navbar.navLinks}>
                                <li><a>Airbnb your home</a></li>
                                <li><a><FaGlobe className={navbar.globeIcon} /></a></li>
                                <li className={navbar.loginBtn}>
                                    <a onClick={toggleUserMenu}> {/* Add click handler */}
                                        <FaBars className={navbar.globeBarsIcon} />
                                        <FaUserCircle className={navbar.globeUserIcon} />
                                    </a>
                                    {isUserMenuOpen && (
                                        <div className={navbar.userMenu}>
                                            <div className={navbar.logSign}>
                                                <ul>
                                                    <li><a onClick={loginSignup}>Sign up</a></li>
                                                    <li><a onClick={loginSignup}>Log in</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li><a>Gift cards</a></li>
                                                    <li><a>Airbnb your home</a></li>
                                                    <li><a>Host an experience</a></li>
                                                    <li><a>Help Center</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        ) : (
                            <div> </div>
                        )
                    }

                </div>
                <div className={navbar.mobileBar}>
                    <div onClick={() => handleButtonClick("explore")} className={selectedButton === "explore" ? navbar.mobileSelected : ""}>
                        <FaSearch className={navbar.iconStyle} />
                        <button>Explore</button>
                    </div>
                    <div onClick={() => handleButtonClick("wishlists")} className={selectedButton === "wishlists" ? navbar.mobileSelected : ""}>
                        <FaRegHeart className={navbar.iconStyle} />
                        <button>Wishlists</button>
                    </div>
                    <div onClick={() => handleButtonClick("login")} className={selectedButton === "login" ? navbar.mobileSelected : ""}>
                        <FaUserCircle className={navbar.iconStyle} />
                        <button>Log in</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
